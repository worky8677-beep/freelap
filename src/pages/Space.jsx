import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faShieldHalved, faTrainSubway, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components/common/Btn'
import { SpaceCard, spaces } from '../components/SpaceCard'

const amenities = [
  { icon: faClock,          title: '24시간 이용가능', sub: '낮에도 밤에도 원하는 시간에' },
  { icon: faShieldHalved,   title: '멤버만 출입가능',  sub: '지문 등록으로 안전한 출입' },
  { icon: faTrainSubway,    title: '역에서 3분컷',     sub: '발산역 도보 3분 거리' },
]

const legends = [
  { color: '#e5f1de', label: '워크존' },
  { color: '#dbefff', label: '리프레시존' },
  { color: '#eee8f1', label: '팟캐스트 스튜디오' },
  { color: '#fffde0', label: '회의실' },
]

const notices = [
  '팟캐스트 스튜디오에서는 물 이외의 음식은 반입 및 취식이 불가합니다 :) 간식은 스튜디오 바로 앞 휴게 라운지에서 즐겨주세요!',
  '휴게라운지에서는 간식과 도시락 등 취식이 가능합니다. 다만 다른 이용자 분들을 위해 너무 냄새가 심한 음식만 삼가주세요.',
  '화장실은 건물 내부 화장실을 이용하시면 됩니다. 많은 사람이 이용하는 편이 아니라 깔끔합니다.',
  '주차는 퀸즈파크텐 건물 주차장을 이용하시면 됩니다',
  '이용하며 생긴 불편사항은 언제든지 말씀해주세요. 더욱 노력하는 프리랩이 되도록 노력하겠습니다.',
]

function Reveal({ children, from = 'left', className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const start = from === 'left' ? '-translate-x-16' : 'translate-x-16'
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${on ? 'opacity-100 translate-x-0' : `opacity-0 ${start}`} ${className}`}>
      {children}
    </div>
  )
}

function DescItem({ text }) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="mt-[5px] sm:mt-[7px] w-2 sm:w-[10px] h-4 sm:h-[20px] bg-terracotta/70 rounded-full shrink-0" />
      <p className="text-sm sm:text-base lg:text-2xl text-[#4b4842] leading-normal tracking-[-0.48px]">{text}</p>
    </div>
  )
}

export default function Space() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText('서울 강서구 마곡중앙6로 66 퀸즈파크텐 B동 3층 322-323호')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white">

      {/* WORK SPACE */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-60 py-12 sm:py-16 lg:py-[100px] flex flex-col items-center">

        <div className="flex flex-col gap-3 items-center pb-12 sm:pb-16 lg:pb-[100px]">
          <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px] whitespace-nowrap">WORK SPACE</p>
          <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">프리랩의 공간을 소개합니다</p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-[100px] w-full">
          {spaces.map((s, i) => (
            <Reveal key={s.title} from={i % 2 === 0 ? 'left' : 'right'}>
              <SpaceCard {...s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-[100px]">
          <Btn href="https://m.place.naver.com/place/2067614711/home?entry=pll&bk_query=%ED%94%84%EB%A6%AC%EB%9E%A9" icon={faArrowRight}>
            투어 및 예약하러가기
          </Btn>
        </div>

        {/* 편의시설 */}
        <div className="mt-12 sm:mt-16 lg:mt-[100px] w-full">
          <div className="bg-cream grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-10 lg:gap-x-[88px] lg:gap-y-[93px] p-8 sm:p-12 lg:p-[100px] rounded-3xl w-full">
            {amenities.map(({ icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center gap-4 lg:gap-6">
                <FontAwesomeIcon icon={icon} className="text-[56px] sm:text-[72px] lg:text-[96px] text-[#183153]" />
                <p className="font-semibold text-2xl sm:text-[28px] lg:text-[40px] text-dark-brown text-center tracking-[-0.8px] leading-normal">{title}</p>
                <p className="font-semibold text-base sm:text-lg lg:text-2xl text-dark-brown text-center tracking-[-0.48px]">{sub}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 도면 */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-60 py-12 sm:py-16 lg:py-[200px] flex flex-col lg:flex-row gap-10 lg:gap-[135px] items-center justify-center">
        <div className="w-full lg:w-[900px] lg:shrink-0">
          <img src="/img/space/tablemap.png" alt="도면" className="w-full" />
        </div>
        <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-auto">
          {legends.map(({ color, label }) => (
            <div key={label} className="flex gap-4 lg:gap-5 items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rounded-full border border-[#bababa] shrink-0" style={{ backgroundColor: color }} />
              <p className="font-bold text-xl sm:text-2xl lg:text-[40px] text-[#4b4842] tracking-[-0.8px] leading-normal">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-60 py-12 sm:py-16 lg:py-[100px] flex flex-col items-center gap-8 lg:gap-14">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">MAP</p>
          <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">오시는 길</p>
        </div>

        <img src="/img/space/map.png" alt="오시는 길" className="w-full lg:w-[904px] rounded-2xl" />

        <div
          onClick={copyAddress}
          className="flex items-center gap-3 lg:gap-5 cursor-pointer group relative"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-xl sm:text-2xl lg:text-[32px] text-dark-brown/80 shrink-0" />
          <div className="text-base sm:text-xl lg:text-[32px] font-medium text-dark-brown text-center tracking-[-0.64px] leading-normal relative">
            <p>서울 강서구 마곡중앙6로 66</p>
            <p>퀸즈파크텐 B동 3층 322-323호</p>
            <span className={`absolute -top-9 left-1/2 -translate-x-1/2 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 pointer-events-none
              ${copied
                ? 'bg-dark-green text-cream opacity-100 translate-y-0'
                : 'bg-dark-brown text-cream opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
              }`}
            >
              {copied ? '복사 완료! ✓' : '복사할까요?'}
            </span>
          </div>
        </div>

        <div className="flex gap-5 sm:gap-8 lg:gap-14 w-full lg:w-[904px]">
          <Btn href="https://map.naver.com/p/search/%ED%94%84%EB%A6%AC%EB%9E%A9/place/2067614711?c=15.00,0,0,0,dh&placePath=/home?bk_query=%ED%94%84%EB%A6%AC%EB%9E%A9&entry=bmp&from=map&fromPanelNum=2&timestamp=202606021104&locale=ko&svcName=map_pcv5&searchText=%ED%94%84%EB%A6%AC%EB%9E%A9" icon={faArrowRight} className="flex-1">
            네이버지도
          </Btn>
          <Btn href="https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EB%A7%88%EA%B3%A1%EC%A4%91%EC%95%996%EB%A1%9C%2066" icon={faArrowRight} className="flex-1">
            카카오맵
          </Btn>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-60 py-12 sm:py-16 lg:py-[100px] flex flex-col gap-3">
        {notices.map((n, i) => <DescItem key={i} text={n} />)}
      </section>

    </div>
  )
}
