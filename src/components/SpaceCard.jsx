import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const spaces = [
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

function Carousel({ imgs, alt }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + imgs.length) % imgs.length)
  const next = () => setIdx(i => (i + 1) % imgs.length)

  return (
    <div className="w-[600px] h-[375px] rounded-[18px] overflow-hidden relative shrink-0 group">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {imgs.map((src, i) => (
          <img key={i} src={src} alt={alt} className="w-[600px] h-full object-cover shrink-0" />
        ))}
      </div>
      {imgs.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imgs.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function SpaceCard({ imgs, title, descs }) {
  return (
    <div className="flex gap-[100px] items-start w-full">
      <Carousel imgs={imgs} alt={title} />
      <div className="flex flex-col gap-8 w-[740px]">
        <div className="py-5">
          <p className="font-bold text-[40px] text-[#4b4842] tracking-[-0.8px] leading-normal">{title}</p>
        </div>
        <div className="flex flex-col gap-5">
          {descs.map((d, i) => (
            <div key={i} className="flex gap-3 items-start w-full">
              <div className="mt-[7px] w-[10px] h-[20px] bg-terracotta/70 rounded-full shrink-0" />
              <p className="text-2xl text-[#4b4842] leading-normal tracking-[-0.48px]">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
