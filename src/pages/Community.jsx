import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons'

const instaPosts = [
  { img: '/img/space/lounge1.JPG', likes: 142, caption: '자유롭게 일하고 싶은 모든 분들을 위한 공간, 프리랩입니다 🌱', comments: 23, date: '2일 전' },
  { img: '/img/space/work3.JPG',   likes: 98,  caption: '오늘도 각자의 작업에 몰입하는 프리랩 멤버들 🌿', comments: 15, date: '5일 전' },
  { img: '/img/space/lounge2.JPG', likes: 115, caption: '당신의 작업 공간이 될 수 있어요. 함께해요 ✨', comments: 19, date: '1주 전' },
]

const ytVideos = [
  { img: '/img/space/studio1.JPG', title: '팟캐스트 스튜디오 완벽 가이드', channel: '프리랩', views: '8,432', date: '2주 전' },
  { img: '/img/space/studio2.JPG', title: '프리랩 투어 & 공간 소개',       channel: '프리랩', views: '5,211', date: '3주 전' },
  { img: '/img/space/studio3.JPG', title: '혼자 일하는 사람들을 위한 공간', channel: '프리랩', views: '3,872', date: '1개월 전' },
]

const notices = [
  '팟캐스트 스튜디오에서는 물 이외의 음식은 반입 및 취식이 불가합니다 :) 간식은 스튜디오 바로 앞 휴게 라운지에서 즐겨주세요!',
  '휴게라운지에서는 간식과 도시락 등 취식이 가능합니다. 다만 다른 이용자 분들을 위해 너무 냄새가 심한 음식만 삼가주세요.',
  '화장실은 건물 내부 화장실을 이용하시면 됩니다. 많은 사람이 이용하는 편이 아니라 깔끔합니다.',
  '이용하며 생긴 불편사항은 언제든지 말씀해주세요. 더욱 노력하는 프리랩이 되도록 노력하겠습니다.',
]

const instaGradient = 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af)'

function InstaCard({ img, likes, caption, comments, date }) {
  return (
    <div className="bg-white border border-[#dbdbdb] rounded-xl overflow-hidden w-[359px]">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full shrink-0" style={{ background: instaGradient }} />
          <span className="text-[#262626] text-[11px]">freelab_official</span>
        </div>
        <span className="text-[#0095f6] text-[11px]">팔로우</span>
      </div>
      <div className="h-[357px] relative">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="px-3 py-2">
        <div className="flex gap-3 mb-2">
          <FontAwesomeIcon icon={faHeart}      className="text-[18px] text-[#262626]" />
          <FontAwesomeIcon icon={faComment}    className="text-[18px] text-[#262626]" />
          <FontAwesomeIcon icon={faPaperPlane} className="text-[18px] text-[#262626]" />
          <FontAwesomeIcon icon={faBookmark}   className="text-[18px] text-[#262626] ml-auto" />
        </div>
        <p className="text-xs font-semibold text-[#262626]">좋아요 {likes}개</p>
        <p className="text-xs text-[#262626] mt-0.5 leading-snug">
          <span className="font-semibold">freelab_official</span> {caption}
        </p>
        <p className="text-xs text-[#8e8e8e] mt-1">댓글 {comments}개 모두 보기</p>
        <p className="text-[10px] text-[#8e8e8e] uppercase mt-0.5">{date}</p>
      </div>
    </div>
  )
}

function YTCard({ img, title, channel, views, date }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[2px_4px_6.7px_rgba(0,0,0,0.1)] w-[360px]">
      <div className="h-[200px] relative bg-[#f0f0f0]">
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex gap-3 p-4 items-start">
        <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shrink-0">
          <FontAwesomeIcon icon={faPlay} className="text-white text-xs" />
        </div>
        <div>
          <p className="font-semibold text-[15px] text-dark-brown tracking-[-0.3px] leading-snug">{title}</p>
          <p className="text-[13px] text-[#606060] mt-1 tracking-[-0.26px]">{channel}</p>
          <p className="text-[13px] text-[#606060] tracking-[-0.26px]">조회수 {views}회 · {date}</p>
        </div>
      </div>
    </div>
  )
}

export default function Community() {
  return (
    <div className="bg-white">

      {/* MEMBER */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center gap-[100px]">
        <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">MEMBER</p>
        <div
          className="px-10 py-5 flex flex-col items-center gap-1 text-white"
          style={{ background: 'rgb(220, 161, 129)' }}
        >
          <p className="text-2xl font-light leading-[0.94]">프리랩 맴버 모집중!</p>
          <p className="font-['Dela_Gothic_One'] text-[36px] leading-[0.94]">COME JOIN US</p>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col items-center gap-[100px]">
        <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">SOCIAL</p>

        {/* 인스타그램 */}
        <div className="flex gap-6 justify-between w-[1100px]">
          {instaPosts.map((post, i) => <InstaCard key={i} {...post} />)}
        </div>

        {/* 유튜브 */}
        <div className="flex gap-3">
          {ytVideos.map((v, i) => <YTCard key={i} {...v} />)}
        </div>
      </section>

      {/* 주의사항 */}
      <section className="px-6 xl:px-60 py-[100px] flex flex-col gap-3">
        {notices.map((n, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="mt-[7px] w-[10px] h-[20px] bg-terracotta/70 rounded-full shrink-0" />
            <p className="text-2xl text-[#4b4842] leading-normal tracking-[-0.48px]">{n}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
