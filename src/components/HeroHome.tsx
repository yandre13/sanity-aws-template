import { formatLocalUrl } from '@/utils/formats'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroHome({
  title,
  description,
  imageURL,
  callToAction,
}: {
  title: string
  description: string
  imageURL: string
  callToAction: {
    linkText: string
    linkUrl: string
    isExternal: boolean
  }
}) {
  return (
    <section className="hero py-20">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <Image
          src={imageURL}
          alt={title}
          width={400}
          height={700}
          className="aspect-square rounded-lg shadow-2xl"
        />
        <div>
          <p className="py-6">{description}</p>
          {callToAction.isExternal ? (
            <a
              href={callToAction.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn"
            >
              {callToAction.linkText}
            </a>
          ) : (
            <Link
              href={formatLocalUrl(callToAction.linkUrl)}
              className="btn-primary btn"
            >
              {callToAction.linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
