import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        내 포트폴리오
      </h1>
      <p className="mb-4">
        {`저는 Vim 애호가이자 탭 옹호자입니다. Vim의 키 입력 명령어에서 타의 추종을 불허하는 효율성을 발견했고,
        탭의 유연성은 개인 취향에 맞게 조정할 수 있습니다. 이는 정적 타입 지원으로 이어지는데,
        조기 오류 감지를 통해 더 깔끔한 코드를 보장하며, 다크 모드를 선호하는 이유는
        긴 코딩 세션 동안 눈의 피로를 줄여주기 때문입니다.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
