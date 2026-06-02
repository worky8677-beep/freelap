const imgs = {
  hero: '/img/space/work3.JPG',
}

export function Hero() {
  return (
    <section className="relative h-[950px] flex items-center justify-center overflow-hidden">
      <img src={imgs.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-cream text-center flex flex-col gap-10 items-center">
        <div className="font-bold text-[64px] leading-[1.2] tracking-[6.4px] whitespace-nowrap">
          <p>단단하게 혼자</p>
          <p>따뜻하게 함께</p>
        </div>
        <div className="font-semibold text-[40px] leading-none tracking-[-0.8px] whitespace-nowrap">
          <p>발산역과 마곡역 사이, 도보 5분 거리</p>
          <p>크리에이터를 위한 공유 작업실</p>
        </div>
      </div>
    </section>
  )
}
