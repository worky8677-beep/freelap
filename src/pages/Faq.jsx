import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const faqs = [
  {
    category: '이용 안내',
    items: [
      {
        q: '운영 시간이 어떻게 되나요?',
        a: '프리랩은 24시간 365일 운영됩니다. 멤버 등록 후 지문 인식으로 언제든지 자유롭게 출입할 수 있어요.',
      },
      {
        q: '처음 이용하려면 어떻게 하나요?',
        a: '네이버 예약 또는 투어 신청을 통해 공간을 먼저 둘러보신 후 멤버십을 결정하시면 됩니다. 투어는 무료로 진행됩니다.',
      },
      {
        q: '주차가 가능한가요?',
        a: '퀸즈파크텐 건물 내 주차장을 이용하실 수 있습니다. 주차 요금은 건물 기준을 따릅니다.',
      },
      {
        q: '화장실은 어디에 있나요?',
        a: '건물 내 공용 화장실을 이용하시면 됩니다. 이용자가 많지 않아 쾌적하게 사용하실 수 있어요.',
      },
    ],
  },
  {
    category: '요금 및 결제',
    items: [
      {
        q: '자유석과 전용석의 차이가 뭔가요?',
        a: '자유석은 매일 원하는 자리를 골라 이용하는 방식이고, 전용석(프라이빗 전용석)은 고정된 나만의 자리를 배정받아 짐을 두고 다닐 수 있는 방식입니다.',
      },
      {
        q: '결제는 어떻게 하나요?',
        a: '네이버 예약을 통해 결제하거나, 직접 방문 후 결제도 가능합니다. 카드 및 계좌이체 모두 가능합니다.',
      },
      {
        q: '환불은 가능한가요?',
        a: '멤버십 시작 전 취소 시 100% 환불됩니다. 멤버십 시작 후에는 이용 일수를 차감한 일할 계산으로 환불됩니다. 자세한 내용은 요금 페이지의 환불 정책을 확인해 주세요.',
      },
      {
        q: '장기 이용 시 할인이 있나요?',
        a: '6개월 또는 12개월 멤버십 이용 시 월 요금이 낮아지며, 팟캐스트 스튜디오 및 녹음부스 이용 시 추가 할인 혜택도 받으실 수 있습니다.',
      },
    ],
  },
  {
    category: '팟캐스트 스튜디오',
    items: [
      {
        q: '스튜디오 예약은 어떻게 하나요?',
        a: '네이버 예약을 통해 원하는 시간대를 선택해 예약하실 수 있습니다. 멤버십 보유 여부에 따라 할인이 적용됩니다.',
      },
      {
        q: '장비를 직접 가져와야 하나요?',
        a: '아니요! SHURE 마이크(MV7) 2개, MIDI PULS 헤드셋 2개, ZOOM PodTrak P4, 캐논 카메라 2대, 조명 등 기본 장비가 모두 갖춰져 있습니다.',
      },
      {
        q: '스튜디오 안에서 음식 섭취가 가능한가요?',
        a: '스튜디오 내에서는 물 이외의 음식은 반입 및 취식이 불가합니다. 간식은 스튜디오 바로 앞 휴게 라운지를 이용해 주세요.',
      },
      {
        q: '예약 취소는 언제까지 가능한가요?',
        a: '이용 24시간 전까지 취소 시 100% 환불됩니다. 24시간 이내 취소 및 노쇼는 환불이 불가합니다.',
      },
    ],
  },
  {
    category: '시설 및 편의',
    items: [
      {
        q: '음식을 가져와서 먹을 수 있나요?',
        a: '휴게 라운지에서는 도시락이나 간식을 자유롭게 드실 수 있습니다. 다만 다른 멤버를 위해 냄새가 강한 음식은 삼가 주세요.',
      },
      {
        q: '짐을 보관할 수 있나요?',
        a: '전용석 멤버는 지정 자리에 짐을 두고 다니실 수 있습니다. 자유석 멤버는 별도의 물품 보관함을 이용하실 수 있어요.',
      },
      {
        q: '와이파이가 제공되나요?',
        a: '네, 고속 와이파이가 제공됩니다. 접속 정보는 입장 후 안내드립니다.',
      },
    ],
  },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#e0e0e0] last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-6 text-left gap-6"
      >
        <span className="font-semibold text-xl text-dark-brown leading-snug tracking-[-0.4px]">{q}</span>
        <span className={`text-dark-green shrink-0 transition-transform duration-300 ${open ? 'rotate-0' : ''}`}>
          <FontAwesomeIcon icon={open ? faMinus : faPlus} className="text-lg" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-dark-brown/70 text-lg leading-relaxed tracking-[-0.3px]">{a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <div className="bg-white">

      {/* 헤더 */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center gap-3">
        <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">F&Q</p>
        <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">자주 묻는 질문</p>
      </section>

      {/* 아코디언 */}
      <section className="px-6 xl:px-60 pb-[100px] flex flex-col gap-16">
        {faqs.map(({ category, items }) => (
          <div key={category}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-7 bg-dark-green rounded-full" />
              <h2 className="font-bold text-2xl text-dark-green tracking-[-0.4px]">{category}</h2>
            </div>
            <div className="bg-cream rounded-2xl px-8">
              {items.map((item, i) => (
                <AccordionItem key={i} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
