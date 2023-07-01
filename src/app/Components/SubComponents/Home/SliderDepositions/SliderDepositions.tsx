'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import { depositions } from '@/app/mock/depositions'

export default function SliderDepositions() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {depositions.map((depositions, Index) => (
          <SwiperSlide
            key={depositions.title}
            className="!z-0 !h-[500px] cursor-grab !bg-transparent object-cover text-black"
          >
            <div className="flex flex-col items-center justify-center">
              <h2 className="font_montserrat text-3xl font-bold text-textColor max-lg:text-2xl max-md:text-xl max-sm:text-base">
                {depositions.title}
              </h2>
              <p className="font_montserrat mt-8 w-[1100px] text-2xl text-textColor max-lg:w-[850px] max-lg:text-base max-md:w-[630px] max-md:text-sm max-sm:w-[450px] max-sm:text-xs max-cellSliderDepositions:w-[300px]">
                {depositions.text}
              </p>
              <h3 className="font_montserrat mt-6 text-3xl font-medium text-textColor max-lg:text-2xl max-md:text-xl max-sm:text-base">
                {depositions.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
