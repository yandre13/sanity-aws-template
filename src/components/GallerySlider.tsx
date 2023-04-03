import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'
import Image from 'next/image'

export default function GallerySlider({
  images,
}: {
  images: Array<{
    alt: string
    url: string
  }>
}) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      key={Math.random() * 30}
    >
      {images.map((image, i) => (
        <SwiperSlide key={`${image.url}-${i}`}>
          <Image
            src={image.url}
            alt={image.alt}
            width={800}
            height={500}
            className="mx-auto aspect-video rounded-lg shadow-2xl"
            key={Math.random() * 30}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
