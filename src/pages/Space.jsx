import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faShieldHalved, faTrainSubway, faLocationDot, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components/common/Btn'

const spaces = [
  {
    imgs: ['/img/space/work3.JPG', '/img/space/work1.png', '/img/space/work2.JPG'],
    title: '워크존',
    descs: [
      '흔들림 없는 1400×600 / 1400×800 책상. 노트북 외에 모니터를 두거나, 작업물을 펼쳐두기에 충분한 너비예요. 취향에 따라 책상을 골라보세요',
      '딱딱한 의자가 아닌 푹신하고 허리를 받쳐주는 의자',
      '내 자리만 밝히는 스탠드로 더욱 집중 할 수 있는 공간',
    ],
  },
  {
    imgs: ['/img/space/lounge2.JPG', '/img/space/lounge1.JPG'],
    title: '리프레시존',
    descs: [
      '집중한 만큼 편하게 쉴 수 있는 라운지. 소파와 원형테이블에서 잠시 숨을 돌려보세요',
      '간단한 식사와 간식을 드실 수 있어요. 냉장고가 있어 도시락이나 간식거리를 보관 할 수 있고, 정수기가 있으니 자유롭게 이용해주세요',
      '프리랩 멤버들과 자연스럽게 대화가 오가는 공간입니다. 새로운 협업이 시작될지도 몰라요',
    ],
  },
  {
    imgs: ['/img/space/studio3.JPG', '/img/space/studio1.JPG', '/img/space/studio2.JPG'],
    title: '팟캐스트 스튜디오',
    descs: [
      '2인이 녹음하기 좋은 팟캐스트 스튜디오',
      '기본으로 제공되는 마이크와 헤드셋으로 장비 걱정없이 오세요!',
      '장비 리스트 : SHURE 마이크(MV7) 2개 / MIDI PULS 헤드셋 2개 / ZOOM PodTrak P4 / 캐논 카메라 2대 / HDMI 멀티뷰어 화면 분할기 / FS-300B 조명 2대 / 캐논 HF G70 2대 (라이브방송, 녹화 가능)',
    ],
  },
]

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

function Carousel({ imgs, alt }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + imgs.length) % imgs.length)
  const next = () => setIdx(i => (i + 1) % imgs.length)

  return (
    <div className="w-[600px] h-[375px] rounded-[18px] overflow-hidden relative shrink-0 group">
      {/* 슬라이드 트랙 */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className="w-[600px] h-full object-cover shrink-0"
          />
        ))}
      </div>

      {imgs.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function DescItem({ text }) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="mt-[7px] w-[10px] h-[20px] bg-terracotta/70 rounded-full shrink-0" />
      <p className="text-2xl text-[#4b4842] leading-normal tracking-[-0.48px]">{text}</p>
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

      {/* WORK SPACE 헤더 + 공간 섹션 */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center">

        {/* 타이틀 */}
        <div className="flex flex-col gap-3 items-center pb-[100px]">
          <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px] whitespace-nowrap">WORK SPACE</p>
          <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">프리랩의 공간을 소개합니다</p>
        </div>

        {/* 공간 3개 */}
        <div className="flex flex-col gap-[100px] w-full">
          {spaces.map(({ imgs, title, descs }) => (
            <div key={title} className="flex gap-[100px] items-start w-full">
              <Carousel imgs={imgs} alt={title} />
              <div className="flex flex-col gap-8 w-[740px]">
                <div className="py-5">
                  <p className="font-bold text-[40px] text-[#4b4842] tracking-[-0.8px] leading-normal">{title}</p>
                </div>
                <div className="flex flex-col gap-5">
                  {descs.map((d, i) => <DescItem key={i} text={d} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 투어 예약 버튼 */}
        <div className="mt-[100px]">
          <Btn href="https://m.place.naver.com/place/2067614711/home?entry=pll&bk_query=%ED%94%84%EB%A6%AC%EB%9E%A9" icon={faArrowRight}>
            투어 및 예약하러가기
          </Btn>
        </div>

        {/* 편의시설 */}
        <div className="mt-[100px] w-full">
          <div className="bg-cream grid grid-cols-3 gap-x-[88px] gap-y-[93px] p-[100px] rounded-3xl w-full">
            {amenities.map(({ icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center gap-6">
                <FontAwesomeIcon icon={icon} className="text-[96px] text-[#183153]" />
                <p className="font-semibold text-[40px] text-dark-brown text-center tracking-[-0.8px] leading-normal">{title}</p>
                <p className="font-semibold text-2xl text-dark-brown text-center tracking-[-0.48px]">{sub}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 도면 */}
      <section className="px-6 xl:px-60 py-[200px] flex gap-[135px] items-center justify-center">
        <div className="w-[900px] shrink-0">
          <img src="/img/space/tablemap.png" alt="도면" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 shrink-0">
          {legends.map(({ color, label }) => (
            <div key={label} className="flex gap-5 items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-[#bababa] shrink-0" style={{ backgroundColor: color }} />
              <p className="font-bold text-[40px] text-[#4b4842] tracking-[-0.8px] leading-normal">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center gap-14">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">MAP</p>
          <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">오시는 길</p>
        </div>

        <img src="/img/space/map.png" alt="오시는 길" className="w-[904px] rounded-2xl" />

        {/* 주소 */}
        <div
          onClick={copyAddress}
          className="flex items-center gap-5 cursor-pointer group relative"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-[32px] text-dark-brown/80" />
          <div className="text-[32px] font-medium text-dark-brown text-center tracking-[-0.64px] leading-normal relative">
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

        {/* 지도 버튼 */}
        <div className="flex gap-14 w-[904px]">
          <Btn href="https://map.naver.com/p/search/%ED%94%84%EB%A6%AC%EB%9E%A9/place/2067614711?c=15.00,0,0,0,dh&placePath=/home?bk_query=%ED%94%84%EB%A6%AC%EB%9E%A9&entry=bmp&from=map&fromPanelNum=2&timestamp=202606021104&locale=ko&svcName=map_pcv5&searchText=%ED%94%84%EB%A6%AC%EB%9E%A9" icon={faArrowRight} className="flex-1">
            네이버지도
          </Btn>
          <Btn href="https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EB%A7%88%EA%B3%A1%EC%A4%91%EC%95%996%EB%A1%9C%2066" icon={faArrowRight} className="flex-1">
            카카오맵
          </Btn>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col gap-3">
        {notices.map((n, i) => <DescItem key={i} text={n} />)}
      </section>

    </div>
  )
}
