import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) return <Navigate to="/admin" replace />

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ok = login(username, password)
    if (!ok) {
      setError('Invalid credentials')
      return
    }
    const routeState = location.state as { from?: { pathname?: string } } | null
    const nextPath = routeState?.from?.pathname || '/admin'
    navigate(nextPath, { replace: true })
  }

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-xl px-5 pb-20 md:px-8 md:pb-24">
        <div className="rounded-[2rem] border border-[#4A3523]/20 bg-white p-7 md:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-[#8D5D33]">Admin Access</p>
          <h1 className="mt-3 text-4xl font-black text-[#2D1D12]">Login</h1>
          <p className="mt-3 text-sm text-[#5C4634]">Default users: admin/admin123 and superadmin/super123</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              className="w-full rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33]"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33]"
            />
            {error && <p className="text-sm font-semibold text-red-700">{error}</p>}
            <button type="submit" className="w-full rounded-xl bg-[#3E2719] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F7ECDB] transition hover:bg-[#2D1D12]">
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
