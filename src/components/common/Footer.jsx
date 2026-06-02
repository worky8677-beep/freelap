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
    href: "", // YouTube 주소 입력
  },
]

const info = [
  [
    { label: '상호명', value: '프리랩 주식회사' },
    { label: '사업자등록번호', value: '123-45-67890' },
  ],
  [
    { label: '대표자', value: '김프리' },
    { label: '전화번호', value: '02-1234-5678' },
  ],
  [
    { label: '주소', value: '서울특별시 강서구 발산역 인근' },
  ],
]

export function Footer() {
  return (
    <footer className="bg-dark-green px-6 xl:px-60 py-11">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center mb-6">
          <p className="font-['Rammetto_One'] text-cream text-[55px] leading-[0.94] text-center tracking-[-2.2px]">
            FREE<br />LAB
          </p>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            {info.map((row, i) => (
              <div key={i} className="flex gap-8">
                {row.map(({ label, value }) => (
                  <div key={label} className="flex gap-2 text-cream text-base">
                    <span className="opacity-70">{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 items-start">
            <div className="flex gap-11 items-center">
              {socials.map(({ icon, alt, href }) =>
                href ? (
                  <a key={alt} href={href} target="_blank" rel="noreferrer" className="text-cream text-[48px] hover:opacity-70 transition-opacity">
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ) : (
                  <span key={alt} className="text-cream/40 text-[48px]">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                )
              )}
            </div>
            <p className="font-['Dela_Gothic_One'] text-cream/50 text-[40px] whitespace-nowrap leading-normal">
              come join us
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
