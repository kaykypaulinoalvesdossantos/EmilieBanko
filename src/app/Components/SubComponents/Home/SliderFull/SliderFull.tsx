'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import Image from 'next/image'
import { slideImg } from '@/app/mock/img'

export default function SliderFull() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slideImg.map((IMG, Index) => (
          <SwiperSlide
            key={IMG.id}
            className="!z-0 !h-[695px] object-cover text-white max-lg:!h-[495px] max-md:!h-[370px] max-sm:!h-[308px]"
          >
            <Image src={IMG.dir} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
