import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMicrophoneLines, faBriefcase, faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components/common/Btn'
import { Hero } from '../components/Hero'

function Reveal({ children, from = 'left', className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true) },
      { threshold: 0.12 }
    )
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const start = from === 'left' ? '-translate-x-16' : 'translate-x-16'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${on ? 'opacity-100 translate-x-0' : `opacity-0 ${start}`} ${className}`}
    >
      {children}
    </div>
  )
}

const imgs = {
  about:  "/img/space/work1.png",
  space1: "/img/space/work3.JPG",
  space2: "/img/space/work1.png",
  space3: "/img/space/lounge1.JPG",
  space4: "/img/space/lounge2.JPG",
}

const whoCards = [
  {
    icon: faUser,
    title: '프리랜서',
    desc: ['디자이너, 영상 편집자 등등 혼자 일하지만', '타인과 비슷한 온도로 몰입할 공간을 찾는 사람'],
  },
  {
    icon: faMicrophoneLines,
    title: '크리에이터',
    desc: ['찍고, 녹음하고, 편집하고. 만드는 사람', '팟캐스트 스튜디오가 필요한 유튜버'],
  },
  {
    icon: faBriefcase,
    title: '퇴근한 직장인',
    desc: ['퇴근 후 나만의 시간이 필요한 직장인', '독립을 준비하는 프리랜서 지망생'],
  },
]

const freeFeatures = [
  '매일 다른 자리, 매일 다른 기분',
  '창가도, 구석도, 오늘 컨디션에 맞게',
  '기분따라 자리를 고를 수 있어요',
  '동료와 함께 왔다면 가까운 자리에',
]

const dedicatedFeatures = [
  '고정 좌석으로 매번 자리 찾지 않아도 돼요',
  '내 물건, 내 세팅 그대로',
  '짐을 두고 다닐 수 있어요',
  '집 이외에 나만의 작업실이 한 곳 더.',
]

const fallbackPosts = [
  { img: imgs.space4, caption: '자유롭게 일하고 싶은 모든 분들을 위한 공간, 프리랩입니다 🌱' },
  { img: imgs.space3, caption: '오늘도 각자의 작업에 집중하는 프리랩 멤버들 🌿' },
  { img: imgs.space2, caption: '당신의 작업 공간이 될 수 있어요. 프리랩에서 함께해요 ✨' },
]

const INSTAGRAM_API = `https://graph.facebook.com/v25.0/17841443289677059/media?fields=id,media_type,media_url,caption,timestamp&limit=6&access_token=${import.meta.env.VITE_INSTAGRAM_TOKEN}`

function PriceSection() {
  const [hoverFree, setHoverFree] = useState(false)

  const freeSelected      = hoverFree
  const dedicatedSelected = !hoverFree

  const selectedCls = 'border-2 border-dark-green shadow-[2px_4px_10px_rgba(27,85,19,0.31)]'
  const plainCls    = 'border-2 border-transparent shadow-[2px_4px_10px_rgba(0,0,0,0.1)]'

  return (
    <section className="bg-cream/50 px-6 sm:px-10 lg:px-20 xl:px-60 py-16 lg:py-24 flex flex-col gap-10 items-center">
      <Reveal from="right" className="flex flex-col gap-10 items-center w-full">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-terracotta leading-[1.2] tracking-[6.4px]">Price</p>
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-dark-brown/80 leading-[1.2] tracking-[2.4px]">작업스타일에 맞춰 선택하세요</p>
        </div>
        <div className="text-dark-brown/80 text-base sm:text-lg lg:text-2xl font-medium text-center leading-[1.2] tracking-[2.4px]">
          <p>프리랩은 독서실처럼 정적인 공간이 아닙니다.</p>
          <p>간단한 인사와 작업의 소리들이 백색소음처럼 편안한 공간이 되길 바랍니다</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-[900px]">
          {/* 자유석 */}
          <div
            onMouseEnter={() => setHoverFree(true)}
            className={`bg-white rounded-3xl p-6 lg:p-10 flex flex-col gap-8 lg:gap-12 flex-1 transition-all duration-500 cursor-pointer ${freeSelected ? selectedCls : plainCls}`}
          >
            <div>
              <p className="font-extrabold text-dark-green text-[36px] lg:text-[48px] leading-normal">자유석</p>
              <div className="flex items-baseline gap-5 mt-2">
                <p className="font-bold text-dark-brown text-2xl lg:text-[32px]">15,000~</p>
                <p className="font-medium text-dark-brown/20 text-lg lg:text-2xl tracking-[-1.44px]">/ 1일</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {freeFeatures.map(f => <FeatureItem key={f} text={f} />)}
            </div>
            <Link to="/pricing" className={`font-medium text-xl text-center py-3 rounded-2xl hover:opacity-90 transition-all duration-500 ${freeSelected ? 'bg-dark-green text-cream' : 'bg-[rgba(165,161,153,0.5)] text-dark-brown/80'}`}>
              more details
            </Link>
          </div>
          {/* 전용석 */}
          <div
            onMouseEnter={() => setHoverFree(false)}
            className={`bg-white rounded-3xl p-6 lg:p-10 flex flex-col gap-8 lg:gap-12 flex-1 transition-all duration-500 cursor-pointer ${dedicatedSelected ? selectedCls : plainCls}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-extrabold text-dark-green text-[36px] lg:text-[48px] leading-normal">전용석</p>
                <div className="flex items-baseline gap-5 mt-2">
                  <p className="font-bold text-dark-brown text-2xl lg:text-[32px]">330,000~</p>
                  <p className="font-medium text-dark-brown/20 text-lg lg:text-2xl tracking-[-1.44px]">/ 1개월</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faHeart} className="text-terracotta text-[40px] mt-2" />
            </div>
            <div className="flex flex-col gap-3">
              {dedicatedFeatures.map(f => <FeatureItem key={f} text={f} />)}
            </div>
            <Link to="/pricing" className={`font-medium text-xl text-center py-3 rounded-2xl hover:opacity-90 transition-all duration-500 ${dedicatedSelected ? 'bg-dark-green text-cream' : 'bg-[rgba(165,161,153,0.5)] text-dark-brown/80'}`}>
              more details
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-[14px] bg-dark-green/50 rounded-full shrink-0" />
      <p className="font-medium text-base lg:text-xl text-dark-brown/80 tracking-[-1.2px]">{text}</p>
    </div>
  )
}

function WhoSection() {
  const cardsRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true) },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    if (cardsRef.current) obs.observe(cardsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={`bg-cream px-6 sm:px-10 lg:px-20 xl:px-60 py-16 lg:py-24 flex flex-col gap-10 items-center ${active ? 'icons-active' : ''}`}>
      <Reveal from="right" className="flex flex-col gap-10 items-center w-full">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px] whitespace-nowrap">for Who ?</p>
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">이런 사람을 찾아요</p>
        </div>
        <div ref={cardsRef} className="flex flex-col sm:flex-row gap-3 w-full max-w-[1074px]">
          {whoCards.map(card => <WhoCard key={card.title} {...card} />)}
        </div>
      </Reveal>
    </section>
  )
}

function WhoCard({ icon, title, desc }) {
  return (
    <div className="bg-white flex flex-col items-center justify-between rounded-[18px] sm:rounded-[22px] lg:rounded-[27px] px-5 py-5 sm:px-5 sm:py-6 lg:px-7 lg:py-8 sm:h-[190px] lg:h-[204px] flex-1 gap-3 sm:gap-0">
      <div className="icon-fill relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-dark-brown/20 text-[32px] sm:text-[36px] lg:text-[40px]" />
        <FontAwesomeIcon icon={icon} className="icon-overlay text-[32px] sm:text-[36px] lg:text-[40px]" />
      </div>
      <p className="font-extrabold text-base sm:text-lg lg:text-xl text-dark-brown/80 text-center">{title}</p>
      <div className="text-dark-brown/80 text-xs sm:text-sm lg:text-base font-medium text-center leading-snug">
        {desc.map((line, i) => <p key={i}>{line}</p>)}
      </div>
    </div>
  )
}

function StoryCard({ img, caption }) {
  return (
    <a
      href="https://www.instagram.com/freelab_solopreneur/"
      target="_blank"
      rel="noreferrer"
      className="bg-white border border-[#dbdbdb] rounded-xl overflow-hidden flex-1 min-w-0 block hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-7 h-7 rounded-full bg-dark-green shrink-0" />
        <span className="text-[#262626] text-xs">freelab_official</span>
        <span className="text-[#0095f6] text-xs ml-auto">팔로우</span>
      </div>
      <div className="h-[240px] sm:h-[300px] lg:h-[400px] relative">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="px-4 py-3">
        <p className="text-base text-[#262626] mt-1 leading-snug line-clamp-3">
          <span className="font-semibold">freelab_official</span>{caption ? ` ${caption}` : ''}
        </p>
        <p className="text-sm text-[#8e8e8e] mt-1">댓글 보기</p>
      </div>
    </a>
  )
}

function StorySection() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(INSTAGRAM_API)
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error.message)
        const images = (data.data || [])
          .filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
          .slice(0, 3)
          .map(p => ({ img: p.media_url, caption: p.caption || '' }))
        setPosts(images.length > 0 ? images : fallbackPosts)
      })
      .catch(() => setPosts(fallbackPosts))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="bg-white px-6 sm:px-10 lg:px-20 xl:px-60 py-16 lg:py-24 flex flex-col gap-10 items-center">
      <Reveal from="left" className="flex flex-col gap-10 items-center w-full">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-dark-brown leading-[1.2] tracking-[6.4px]">Story</p>
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-dark-brown/80 leading-[1.2] tracking-[2.4px]">프리랩이 전하는 이야기</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 max-w-[1240px] w-full">
          {loading
            ? [0, 1, 2].map(i => <StoryCardSkeleton key={i} />)
            : posts.map((post, i) => <StoryCard key={i} {...post} />)
          }
        </div>
      </Reveal>
    </section>
  )
}

function StoryCardSkeleton() {
  return (
    <div className="bg-white border border-[#dbdbdb] rounded-xl overflow-hidden flex-1 min-w-0 animate-pulse">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-7 h-7 rounded-full bg-dark-brown/10 shrink-0" />
        <div className="h-3 w-24 bg-dark-brown/10 rounded" />
      </div>
      <div className="h-[240px] sm:h-[300px] lg:h-[400px] bg-dark-brown/10" />
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="h-4 w-full bg-dark-brown/10 rounded" />
        <div className="h-4 w-full bg-dark-brown/10 rounded" />
        <div className="h-4 w-2/3 bg-dark-brown/10 rounded" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-white">

      <Hero />

      {/* About */}
      <section className="bg-white px-4 sm:px-6 lg:px-20 xl:px-60 py-8 sm:py-12 lg:py-24">
        <Reveal from="left">
          {/* 모바일/태블릿: 이미지 위 오버레이 */}
          <div className="lg:hidden w-full h-[260px] sm:h-[340px] rounded-[18px] overflow-hidden relative">
            <img src={imgs.about} alt="프리랩 공간" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[rgba(40,40,40,0.42)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-14 px-6">
              <img src="/img/logo-white2.png" alt="FREE LAB" className="w-44 sm:w-64 object-contain" />
              <div className="text-white text-xs sm:text-sm font-medium text-center leading-[1.3] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <p>1인 크리에이터, 디자이너, 프리랜서를 위한 공유오피스</p>
                <p>각자의 일에 집중하면서도, 같은 공간에서 느슨하게 연결되는 곳.</p>
              </div>
            </div>
          </div>
          {/* 데스크탑: 이미지 + 텍스트 나란히 */}
          <div className="hidden lg:flex max-w-[1440px] mx-auto gap-7 items-center justify-center">
            <div className="w-[600px] h-[375px] shrink-0 rounded-[18px] overflow-hidden relative">
              <img src={imgs.about} alt="프리랩 공간" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center w-[675px]">
              <p className="font-['Rammetto_One'] text-dark-green text-[82px] leading-[0.94] text-center tracking-[-3.3px]">
                FREE<br />LAB
              </p>
              <div className="text-black text-2xl font-medium text-center leading-[1.2] tracking-[-0.24px] pb-10 mt-0">
                <p>1인 크리에이터, 디자이너, 프리랜서를 위한 공유오피스</p>
                <p>각자의 일에 집중하면서도, 같은 공간에서 느슨하게 연결되는 곳.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Who */}
      <WhoSection />

      {/* Space */}
      <section className="bg-white px-6 sm:px-10 lg:px-20 xl:px-60 py-16 lg:py-24 flex flex-col gap-10 items-center">
        <Reveal from="left" className="flex flex-col gap-10 items-center w-full">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-black text-[40px] sm:text-[52px] lg:text-[64px] text-dark-green leading-[1.2] tracking-[6.4px]">Space</p>
            <p className="font-bold text-lg sm:text-xl lg:text-2xl text-dark-brown/80 leading-[1.2] tracking-[2.4px]">당신이 몰입 할 수 있도록</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 w-full">
            {[imgs.space1, imgs.space2, imgs.space3, imgs.space4].map((src, i) => (
              <div key={i} className="w-full h-[220px] sm:h-[280px] lg:h-[375px] rounded-[18px] overflow-hidden relative">
                <img src={src} alt="프리랩 공간" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-dark-brown/80 text-base sm:text-lg lg:text-2xl font-medium text-center leading-[1.5] tracking-[2.4px]">
            <p>프리랩은 정적으로 내려앉은 공간이 아닌</p>
            <p>간단한 인사, 키보드 소리처럼 작업 소음들이 백색소음처럼 자연스럽게 흐르는 공간입니다.</p>
          </div>
          <Btn to="/about" icon={faArrowRight}>
            공간소개
          </Btn>
        </Reveal>
      </section>

      {/* Price */}
      <PriceSection />

      {/* Story */}
      <StorySection />

    </div>
  )
}
