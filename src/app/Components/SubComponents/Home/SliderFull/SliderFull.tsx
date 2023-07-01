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
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center">
          <h2 className="font_montserrat mb-4 text-center text-6xl font-bold text-whiteColor max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
            Casa Espetaculares Esperando por você
          </h2>
          <p className="w-[430px] text-center text-lg font-normal text-whiteColor max-md:text-sm max-sm:w-[300px] max-sm:text-xs">
            Explore nossa seleção de casas fantásticas para aluguel por
            temporada, aconchegantes e luxuosas
          </p>
        </div>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 4000,
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
      </div>
    </>
  )
}
