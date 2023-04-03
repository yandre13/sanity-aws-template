import type { PostProps } from '@/types/post'
import Card from '../Card'

export default function PostList({ posts }: { posts: PostProps[] }) {
  return (
    <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post._id} {...post} />
      ))}
    </div>
  )
}
