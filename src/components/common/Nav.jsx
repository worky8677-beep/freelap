import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const tabs = [
  { to: '/about', label: '소개' },
  { to: '/community', label: '커뮤니티' },
  { to: '/space', label: '공간안내' },
  { to: '/pricing', label: '요금' },
  { to: '/faq', label: 'F&Q' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* 모바일/태블릿 Nav */}
      <nav className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 transition-colors duration-300 ${open ? 'bg-dark-green' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src="/img/logo-white2.png" alt="FREE LAB" className="h-7 object-contain" />
        </NavLink>
        <button
          onClick={() => setOpen(o => !o)}
          className="text-cream text-2xl p-1"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </nav>

      {/* 모바일 풀스크린 메뉴 */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-dark-green flex flex-col items-center justify-center gap-8 pt-16 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {tabs.map(({ to, label }) => (
          <NavLink
            key={label}
            to={to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-2xl font-semibold ${isActive ? 'text-[#DBCB8A]' : 'text-cream'}`
            }
          >
            {label}
          </NavLink>
        ))}
        <a
          href="https://booking.naver.com"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="mt-6 bg-cream text-dark-brown text-lg font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          투어 예약하기
        </a>
      </div>

      {/* 데스크탑 Nav */}
      <nav className="hidden lg:flex bg-dark-green h-20 items-center justify-between px-6 xl:px-60 shrink-0">
        <NavLink to="/">
          <img src="/img/logo-white2.png" alt="FREE LAB" className="h-[72px] object-contain" />
        </NavLink>
        <div className="flex">
          {tabs.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `px-6 py-3 text-xl font-semibold whitespace-nowrap ${isActive ? 'text-[#DBCB8A] nav-active' : 'nav-highlight'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <a
          href="https://booking.naver.com"
          target="_blank"
          rel="noreferrer"
          className="bg-cream text-dark-brown text-xl font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          투어 예약하기
        </a>
      </nav>
    </>
  )
}
