import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

const base = 'bg-dark-green text-cream font-semibold text-2xl h-[82px] px-6 rounded-3xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity whitespace-nowrap'

export function Btn({ to, href, icon, children, className, ...props }) {
  const cls = twMerge(base, className)

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>
        {children}
        {icon && <FontAwesomeIcon icon={icon} className="text-[22px]" />}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
        {icon && <FontAwesomeIcon icon={icon} className="text-[22px]" />}
      </Link>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} className="text-[22px]" />}
    </button>
  )
}
