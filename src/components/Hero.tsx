import Image from 'next/image'

export default function Hero({
  title,
  description,
  url,
}: {
  url: string
  title: string
  description: string
}) {
  return (
    <section className="hero h-[calc(100vh_-_64px)]">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <Image
          src={url}
          alt={title}
          width={400}
          height={700}
          className="aspect-square rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-6xl font-black leading-snug text-transparent">
            {title}
          </h1>
          <p className="py-6">{description}</p>
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </section>
  )
}
