import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'

import './styles.css'
import { Key } from 'react'

export default function SliderAccommodations({ images }: any) {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper !h-[300px] !w-[300px]"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map((item: any, index: Key | null | undefined) => (
        <SwiperSlide key={index} className=" !bg-transparent">
          <Image
            src={item.img}
            alt={''}
            className=" h-[300px] w-[300px] cursor-grab rounded-3xl border-4 border-solid border-colorBorder object-cover "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
