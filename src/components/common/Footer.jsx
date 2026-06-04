import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faThreads, faYoutube } from '@fortawesome/free-brands-svg-icons'

const socials = [
  {
    icon: faInstagram,
    alt: "Instagram",
    href: "https://www.instagram.com/freelab_solopreneur/",
  },
  {
    icon: faThreads,
    alt: "Threads",
    href: "https://www.threads.com/@freelab_official?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    icon: faYoutube,
    alt: "YouTube",
    href: "",
  },
]

const info = [
  [
    { label: '상호명', value: '주식회사 프리플랍' },
    { label: '사업자등록번호', value: '536-86-03515' },
  ],
  [
    { label: '대표자', value: '신선호' },
    { label: '전화번호', value: '02-1533-2747' },
  ],
  [
    { label: '주소', value: '서울특별시 강서구 마곡중앙6로 66, 3층 322-323호' },
  ],
]

export function Footer() {
  return (
    <footer className="bg-dark-green px-6 sm:px-10 lg:px-20 xl:px-60 py-11">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center mb-6">
          <img src="/img/logo-white1.png" alt="FREE LAB" className="w-20 sm:w-28 lg:w-36 object-contain" />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
          <div className="flex flex-col gap-2 lg:gap-3 items-center lg:items-start">
            {info.map((row, i) => (
              <div key={i} className="flex flex-wrap gap-x-6 gap-y-1 justify-center lg:justify-start">
                {row.map(({ label, value }) => (
                  <div key={label} className="flex gap-2 text-cream text-sm lg:text-base">
                    <span className="opacity-70">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
            <div className="flex gap-8 lg:gap-11 items-center">
              {socials.map(({ icon, alt, href }) =>
                href ? (
                  <a key={alt} href={href} target="_blank" rel="noreferrer" className="text-cream text-[28px] sm:text-[36px] lg:text-[48px] hover:opacity-70 transition-opacity">
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ) : (
                  <span key={alt} className="text-cream/40 text-[28px] sm:text-[36px] lg:text-[48px]">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )
              )}
            </div>
            <p className="font-['Dela_Gothic_One'] text-cream/50 text-[20px] sm:text-[28px] lg:text-[40px] whitespace-nowrap leading-normal">
              come join us
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
