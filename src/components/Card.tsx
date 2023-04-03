import { urlFor } from '@/lib/sanity.urlFor'
import type { PostProps } from '@/types/post'
import { formatDate } from '@/utils/formats'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  title,
  description,
  mainImage,
  slug,
  categories,
  author,
  _createdAt,
}: PostProps) {
  return (
    <article className="card mx-auto max-w-[400px] bg-base-100 shadow-xl md:w-full md:max-w-none ">
      <Link href={`/blog/${slug.current}`}>
        <figure>
          <Image
            src={urlFor(mainImage).width(500).height(300).url()}
            alt={title}
            width={500}
            height={300}
            className="aspect-video rounded-t-2xl"
          />
        </figure>
      </Link>

      <div className="card-body">
        <h5 className="mb-2 text-sm">
          <span className="font-bold">
            {categories[categories.length - 1].title} •
          </span>{' '}
          {formatDate(_createdAt)}
        </h5>
        <Link href={`/blog/${slug.current}`}>
          <h2 className="card-title font-black duration-300 ease-in-out hover:text-[#7928CA]">
            {title}
          </h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions mt-5 gap-3">
          <div className="online avatar">
            <div className="w-10 rounded-full">
              <Image
                src={urlFor(author.image).width(80).height(80).url()}
                alt={author.name}
                width={80}
                height={80}
                className="aspect-square"
              />
            </div>
          </div>
          <div>
            <h6 className="text-sm font-medium">{author.name}</h6>
            <p className="text-sm">{author.role}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
