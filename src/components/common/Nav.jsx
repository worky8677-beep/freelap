import { NavLink } from 'react-router'

const tabs = [
  { to: '/about', label: '소개' },
  { to: '/community', label: '커뮤니티' },
  { to: '/space', label: '공간안내' },
  { to: '/pricing', label: '요금' },
  { to: '/faq', label: 'F&Q' },
]

export function Nav() {
  return (
    <nav className="bg-dark-green h-20 flex items-center justify-between px-6 xl:px-60 shrink-0">
      <NavLink to="/" className="font-['Rammetto_One'] text-cream text-[34px] leading-[0.94] whitespace-nowrap">
        FREE LAB
      </NavLink>
      <div className="flex">
        {tabs.map(({ to, label }) => (
          <NavLink
            key={label}
            to={to}
            className="px-6 py-3 text-cream text-xl font-semibold hover:opacity-70 transition-opacity whitespace-nowrap"
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
  )
}
