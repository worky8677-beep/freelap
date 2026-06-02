import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Btn } from '../components/common/Btn'

const dedicated = [
  { label: '고정석 1일 권',   unit: '',   price: '15,000',  highlight: false },
  { label: '고정석 7일 권',   unit: '',   price: '70,000',  highlight: false },
  { label: '12개월 멤버십',   unit: '(월)', price: '330,000', highlight: false },
  { label: '6개월 멤버십',    unit: '(월)', price: '350,000', highlight: true  },
  { label: '3개월 멤버십',    unit: '(월)', price: '380,000', highlight: false },
  { label: '1개월 멤버십',    unit: '(월)', price: '420,000', highlight: false },
]

const benefits = [
  { type: '12개월 멤버십', studio: '30% 할인', booth: '30% 할인' },
  { type: '6개월 멤버십',  studio: '20% 할인', booth: '20% 할인' },
  { type: '3개월 멤버십',  studio: '15% 할인', booth: '15% 할인' },
  { type: '1개월 멤버십',  studio: '10% 할인', booth: '10% 할인' },
  { type: '자율석 1개월',  studio: '5% 할인',  booth: '5% 할인'  },
  { type: '1일권 / 1주일권', studio: '혜택 없음', booth: '혜택 없음' },
]

const refunds = [
  {
    cond: '멤버십 시작 전 취소',
    desc: '100% 환불',
    note: '',
  },
  {
    cond: '멤버십 시작 후 취소',
    desc: '이용 일수 차감 후 일할 계산 환불',
    note: '(장기 사용에 따른 할인적용 불가, 일할 계산은 월할 제외 필일 기준 20일로 적용, 장기 사용시 주말 서비스 개념)',
  },
  {
    cond: '스튜디오 예약 취소\n(24시간 전)',
    desc: '100% 환불',
    note: '',
  },
  {
    cond: '스튜디오 예약 취소\n(24시간 이내)',
    desc: '환불 불가',
    note: '',
  },
  {
    cond: '노쇼',
    desc: '환불 불가',
    note: '',
  },
]

function PriceRow({ label, unit, price, highlight }) {
  return (
    <div className={`flex items-center justify-between w-full px-1 py-1 ${highlight ? 'bg-[#faf5bd] rounded' : ''}`}>
      <div className="flex items-baseline gap-1">
        <span className="font-bold text-[30px] text-dark-brown tracking-[-1.8px]">{label}</span>
        {unit && <span className="font-semibold text-[18px] text-dark-brown/70">{unit}</span>}
        {highlight && (
          <span className="ml-1 bg-white border border-[#e0e0e0] text-terracotta text-xs font-bold px-2 py-0.5 rounded-full">BEST</span>
        )}
      </div>
      <span className="font-bold text-[30px] text-dark-brown">{price}</span>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="bg-white">

      {/* PRICE 헤더 + 카드 섹션 */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center gap-10">

        {/* 타이틀 */}
        <div className="flex flex-col gap-3 items-center py-[100px]">
          <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">PRICE</p>
          <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">합리적인 가격으로 프리랩을 사용하세요</p>
        </div>

        {/* 가격 카드 그리드 */}
        <div className="grid grid-cols-2 gap-[30px] w-[1000px]">

          {/* 자유석 */}
          <div className="border border-[#4b4842]/20 rounded-[22px] px-7 py-[52px] flex flex-col gap-[52px] items-center">
            <p className="font-extrabold text-[45px] text-dark-green text-center">자유석</p>
            <PriceRow label="1일 권" unit="" price="15,000" highlight={false} />
          </div>

          {/* 프라이빗 전용석 — row span 2 */}
          <div className="border border-[#4b4842]/20 rounded-[22px] px-7 py-[52px] flex flex-col gap-[52px] items-center row-span-2">
            <p className="font-extrabold text-[45px] text-dark-green text-center">프라이빗 전용석</p>
            <div className="flex flex-col gap-7 w-full">
              {dedicated.map(row => (
                <PriceRow key={row.label} {...row} />
              ))}
            </div>
          </div>

          {/* 팟캐스트 스튜디오 */}
          <div className="border border-[#4b4842]/20 rounded-[22px] px-7 py-[52px] flex flex-col gap-[52px] items-center">
            <p className="font-extrabold text-[45px] text-dark-green text-center">팟캐스트 스튜디오</p>
            <div className="flex flex-col gap-7 w-full">
              <PriceRow label="1시간" unit="(1인)" price="60,000"  highlight={false} />
              <PriceRow label="2시간" unit="(1인)" price="100,000" highlight={false} />
            </div>
          </div>
        </div>

        {/* 연계 혜택 표 */}
        <div className="border border-[#4b4842]/20 rounded-[24px] p-[54px] w-[1000px]">
          <p className="font-extrabold text-[50px] text-dark-green text-center mb-9 tracking-[-1px]">전용석 + 스튜디오 연계 혜택</p>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-dark-brown text-[22px] font-bold text-dark-brown">
                <th className="text-left py-4 px-4 tracking-[-0.4px]">멤버십 종류</th>
                <th className="text-center py-4 tracking-[-0.4px]">팟캐스트 스튜디오 할인</th>
                <th className="text-center py-4 tracking-[-0.4px]">녹음부스 할인</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map(({ type, studio, booth }) => (
                <tr key={type} className="border-b border-[#e0e0e0] text-[20px] text-dark-brown tracking-[-0.4px]">
                  <td className="font-semibold py-4 px-4">{type}</td>
                  <td className="text-center py-4">{studio}</td>
                  <td className="text-center py-4">{booth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 예약 버튼 */}
        <Btn href="https://m.place.naver.com/place/2067614711/home" icon={faArrowRight}>
          투어 및 예약하러가기
        </Btn>

      </section>

      {/* 환불 규정 */}
      <section className="bg-cream px-6 xl:px-60 py-[100px] flex flex-col items-center gap-10">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">Refund Policy</p>
          <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">환불규정</p>
        </div>

        <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden w-[800px]">
          <table className="w-full text-sm text-[#262626]">
            <tbody>
              {refunds.map(({ cond, desc, note }, i) => (
                <tr key={i} className={i < refunds.length - 1 ? 'border-b border-[#e0e0e0]' : ''}>
                  <td className="px-6 py-5 align-top w-[210px] whitespace-pre-line font-medium">{cond}</td>
                  <td className="px-6 py-5 align-top">
                    <p>{desc}</p>
                    {note && <p className="text-[#69665f] mt-1">{note}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="px-6 xl:px-60 py-[100px]">
        <div className="flex gap-3 items-start">
          <div className="mt-[7px] w-[10px] h-[20px] bg-terracotta/70 rounded-full shrink-0" />
          <p className="text-2xl text-[#4b4842] leading-normal tracking-[-0.48px]">
            팟캐스트 스튜디오에서는 물 이외의 음식은 반입 및 취식이 불가합니다 :) 간식은 스튜디오 바로 앞 휴게 라운지에서 즐겨주세요!
          </p>
        </div>
      </section>

    </div>
  )
}
