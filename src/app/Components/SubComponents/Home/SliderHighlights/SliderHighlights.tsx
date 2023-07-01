'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import Image from 'next/image'
import { slideItem } from '@/app/mock/slideSkill'

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        breakpoints={{
          425: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {slideItem.map((item, index) => (
          <SwiperSlide key={index} className=" !bg-transparent">
            <div className="flex flex-col gap-5">
              <Image
                src={item.img}
                alt={''}
                className="!h-[250px] !w-[250px] cursor-grab rounded-3xl border-4 border-solid border-colorBorder max-lg:!h-[200px] max-lg:!w-[200px] max-md:!h-[150px] max-md:!w-[150px] max-sm:!h-[130px] max-sm:!w-[130px] "
              />
              <h4 className="text-2xl font-bold text-whiteColor max-md:text-xl max-sm:text-base ">
                {item.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
