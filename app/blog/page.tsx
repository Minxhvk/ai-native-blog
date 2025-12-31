import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: '블로그',
  description: '제 블로그를 읽어보세요.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">내 블로그</h1>
      <BlogPosts />
    </section>
  )
}
