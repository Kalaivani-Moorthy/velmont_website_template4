import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { SessionUser, User } from '../types'

const USERS_KEY = 'velmont_users'
const SESSION_KEY = 'velmont_session_user'

type AuthContextValue = {
  user: SessionUser | null
  users: Omit<User, 'password'>[]
  login: (username: string, password: string) => boolean
  logout: () => void
  addAdminUser: (username: string, password: string, role: 'admin' | 'superadmin') => { ok: boolean; error?: string }
}

const defaultUsers: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'superadmin', password: 'super123', role: 'superadmin' },
]

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function readUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY)
  if (!raw) return defaultUsers
  try {
    const parsed = JSON.parse(raw) as User[]
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultUsers
    return parsed
  } catch {
    return defaultUsers
  }
}

function toSessionUser(user: User): SessionUser {
  return { username: user.username, role: user.role }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<SessionUser | null>(null)

  useEffect(() => {
    const storedUsers = readUsers()
    setUsers(storedUsers)
    localStorage.setItem(USERS_KEY, JSON.stringify(storedUsers))

    const rawSession = localStorage.getItem(SESSION_KEY)
    if (!rawSession) return
    try {
      const session = JSON.parse(rawSession) as SessionUser
      if (session?.username && session?.role) setUser(session)
    } catch {
      localStorage.removeItem(SESSION_KEY)
    }
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      users: users.map(({ username, role }) => ({ username, role })),
      login: (username, password) => {
        const found = users.find((entry) => entry.username === username && entry.password === password)
        if (!found) return false
        const sessionUser = toSessionUser(found)
        setUser(sessionUser)
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
        return true
      },
      logout: () => {
        setUser(null)
        localStorage.removeItem(SESSION_KEY)
      },
      addAdminUser: (username, password, role) => {
        const cleanUsername = username.trim()
        const cleanPassword = password.trim()
        if (!cleanUsername || !cleanPassword) {
          return { ok: false, error: 'Username and password are required.' }
        }
        if (users.some((entry) => entry.username.toLowerCase() === cleanUsername.toLowerCase())) {
          return { ok: false, error: 'Username already exists.' }
        }
        const nextUsers = [...users, { username: cleanUsername, password: cleanPassword, role }]
        setUsers(nextUsers)
        localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers))
        return { ok: true }
      },
    }),
    [user, users]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
