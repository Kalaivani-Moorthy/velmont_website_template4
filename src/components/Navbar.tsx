import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo_temple.png'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#4A3523]/25 bg-[#F6EFE2]/95 px-4 py-3 shadow-[0_12px_34px_-24px_rgba(25,20,14,0.65)] backdrop-blur-sm md:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="VelMont" className="h-11 w-11 rounded-full border border-[#4A3523]/25 bg-white p-1" />
          <div>
            <p className="text-base font-black tracking-[0.14em] text-[#3E2719] md:text-lg">VELMONT</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8D5D33]">Spiritual Center</p>
          </div>
        </Link>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-[#4A3523]/25 text-[#3E2719] md:hidden" onClick={() => setOpen((v) => !v)} aria-label="menu">
          <span>{open ? 'x' : '='}</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                    isActive
                      ? 'bg-[#3E2719] text-[#F5ECE0]'
                      : 'text-[#4A3523] hover:bg-[#EADBC5]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            {user ? (
              <div className="flex items-center gap-2">
                <NavLink to="/admin" className="rounded-xl bg-[#3E2719] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5ECE0]">
                  Admin
                </NavLink>
                <button onClick={logout} className="rounded-xl border border-[#4A3523]/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A3523] hover:bg-[#EADBC5]">
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" className="rounded-xl bg-[#3E2719] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5ECE0]">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#4A3523]/20 bg-[#F8F1E6] p-3 md:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm uppercase tracking-[0.18em] ${isActive ? 'bg-[#3E2719] text-[#F5ECE0]' : 'text-[#4A3523] hover:bg-[#EADBC5]'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              {user ? (
                <div className="space-y-1">
                  <NavLink
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg bg-[#3E2719] px-3 py-2 text-sm uppercase tracking-[0.18em] text-[#F5ECE0]"
                  >
                    Admin
                  </NavLink>
                  <button
                    onClick={() => {
                      logout()
                      setOpen(false)
                    }}
                    className="block w-full rounded-lg border border-[#4A3523]/30 px-3 py-2 text-left text-sm uppercase tracking-[0.18em] text-[#4A3523] hover:bg-[#EADBC5]"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-[#3E2719] px-3 py-2 text-sm uppercase tracking-[0.18em] text-[#F5ECE0]"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
