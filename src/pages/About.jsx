export default function About() {
  return (
    <div className="bg-cream">

      {/* 헤더 */}
      <section className="px-6 xl:px-60 pt-24 pb-0 flex flex-col gap-3 items-center text-center">
        <p className="font-black text-[64px] text-[#4b4842] leading-[1.2] tracking-[6.4px]">
          프리랩의 이야기
        </p>
        <p className="font-medium text-2xl text-[#4b4842] leading-[1.2] tracking-[2.4px]">
          발산역에서 시작된 1인 작업자들의 공간.<br />
          어떻게 시작됬고 어떤 것을 만들고 있는지.
        </p>
      </section>

      {/* 본문 */}
      <section className="px-6 xl:px-100 py-24">
        <div className="max-w-[1000px] flex flex-col gap-10">

          <p className="text-2xl font-medium text-dark-brown/80 leading-[1.5] tracking-[-0.48px]">
            10년 넘게 글로벌 시장에서 일했습니다.<br />
            경쟁이 치열한 만큼 성취감도 분명했고, 일과 일상이 분리되지 않는 삶이었죠.<br />
            2019년 한국으로 돌아와 상장사에 합류했습니다. 한국 기업의 시스템에는 쉽게 적응하지 못했습니다.<br />
            <br />
            그래서 회사를 떠나 직접 사업을 만들기 시작했습니다.<br />
            투자 교육, IT 솔루션, 콘텐츠와 마케팅. 동시에 여러 일이 굴러가는 일상이었습니다.<br />
            <br />
            그러다 한 가지 질문이 머리에서 떠나지 않았습니다.
          </p>

          <p className="font-['Cafe24_Shiningstar'] text-[64px] text-dark-brown/80 leading-[1.5] tracking-[-1.28px] bg-white/50">
            "나는 지금 즐겁게 일하고 있나?"
          </p>

          <p className="text-2xl font-medium text-dark-brown/80 leading-[1.5] tracking-[-0.48px]">
            답을 찾는 데 몇 달이 걸렸습니다. 결론은 단순했습니다 — 창의적인 사람들과 같은 공간에서 일하고 싶다는 것. 억지로 어울리지 않아도, 각자 자기 일에 집중하고 자연스럽게 에너지가 오가는 곳.<br />
            <br />
            9년 전 베이징에서 진행한 한 공유 비즈니스 프로젝트가 떠올랐습니다.<br />
            슬로건은 'NEW AGE NEW STAGE'. <span className="font-extrabold">각자지만 함께 성장하는 에너지.</span><br />
            그걸 한 번 더 만들어보고 싶었습니다.<br />
            <br />
            그런데 시장에 그런 공간이 없었습니다. 공유오피스는 딱딱했고, 창의적인 일을 하기엔 에너지가 부족했습니다. 카페는 불편했고, 스튜디오는 짐을 싸들고 들어왔다 나가는 곳이었죠.<br />
            <br />
            <span className="font-extrabold">그래서 직접 만들기로 했습니다.</span><br />
            <br />
            프리랩은 혼자 일하는 사람이 자기 일에 몰입할 수 있고,<br />
            옆자리에서 자연스럽게 영감이 오는 공간을 추구합니다.<br />
            <br />
            권태와 외로움이 슬그머니 찾아올 때 잠시 털어낼 수 있는 느슨한 연대감.<br />
            각자지만 함께 성장하는 에너지. 9년 전 베이징에서 느꼈던 그 힘을, 발산역에서 다시 만들고 있습니다.
          </p>

          <div className="bg-white/50 px-6 py-5 rounded-xl">
            <p className="text-[32px] font-extrabold text-dark-brown/80 leading-[1.5] tracking-[-0.64px]">
              프리랩을 직접 운영하고 있습니다. 매일 출근하는 멤버 중 한 명이기도 하고요.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
