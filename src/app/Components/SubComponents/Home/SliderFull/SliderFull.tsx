'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Img1 from '@/../public/Img/327691101_573498604637961_7227717472882833476_n.jpg'
import Img2 from '@/../public/Img/342382278_781197200278115_4843577159691609571_n.jpg'
import Img3 from '@/../public/Img/342891309_764203442017313_4794134935596876602_n.jpg'
import Img4 from '@/../public/Img/343988232_765406565327357_4539106254967777224_n.jpg'
import Img5 from '@/../public/Img/344383232_1423682238388471_2488840116323363720_n.jpg'
import Img6 from '@/../public/Img/344447923_645953874013904_5207765799423200006_n.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
export default function SliderFull() {
  const Imgs = [
    {
      URL: Img1,
    },
    {
      URL: Img2,
    },
    {
      URL: Img3,
    },
    {
      URL: Img4,
    },
    {
      URL: Img5,
    },
    {
      URL: Img6,
    },
  ]
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {Imgs.map((IMG, Index) => (
          <SwiperSlide
            key={Index}
            className="!z-0 !h-[695px] object-cover text-white max-lg:!h-[495px] max-md:!h-[370px] max-sm:!h-[308px]"
          >
            <Image src={IMG.URL} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
