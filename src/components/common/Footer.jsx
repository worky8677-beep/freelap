const socialIcons = {
  instagram: "https://www.figma.com/api/mcp/asset/4b6f86f5-900d-478b-bf79-5ac5fb581d6e",
  threads: "https://www.figma.com/api/mcp/asset/afbc252a-4c76-4c9d-9b82-1706a663a131",
  youtube: "https://www.figma.com/api/mcp/asset/c57b4959-d0c0-44ae-96fc-ac46d00c3d1e",
}

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
              <img src={socialIcons.instagram} alt="Instagram" className="w-12 h-12" />
              <img src={socialIcons.threads} alt="Threads" className="w-12 h-12" />
              <img src={socialIcons.youtube} alt="YouTube" className="w-12 h-12" />
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
