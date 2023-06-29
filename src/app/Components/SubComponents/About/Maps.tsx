'use client'
/* eslint-disable no-var */
import { useEffect } from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Loader } from '@googlemaps/js-api-loader'
declare let google: any

export default function Maps() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyDzrWpRK7iWl_IG9eVoDSXaOFvaal8JM_8',
      version: 'weekly',
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -21.120858097929833, lng: -44.226039927581624 },
        zoom: 15,
        disableDefaultUI: true,
      })

      // eslint-disable-next-line no-unused-vars
      const marker = new google.maps.Marker({
        position: { lat: -21.120858097929833, lng: -44.226039927581624 },
        map,
        title: 'Local do Evento',
      })

      const directionsService = new google.maps.DirectionsService()
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map,
      })

      const origin = { lat: -21.120858097929833, lng: -44.226039927581624 }
      const destination = 'Endereço de Destino'

      const request = {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }

      directionsService.route(request, function (result: any, status: any) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)
        }
      })
    })
  }, [])

  return (
    <div className="relative">
      <div className="absolute right-[114px] top-[150px] z-10 flex h-[400px] w-[400px] flex-col items-center justify-center rounded-[30px]  bg-white shadow-mapBoxShadow max-lg:right-[99px]  max-lg:top-[75px]  max-lg:h-[350px] max-lg:w-[350px] max-md:right-[63px] max-md:top-[75px] max-md:h-[300px] max-md:w-[300px] max-sm:right-[46px] max-sm:top-[84px] max-sm:h-[250px] max-sm:w-[300px] max-[320px]:left-[1%] max-[320px]:right-[1%]   ">
        <MapPin className="max-lg:[76px] h-20 w-[70px] text-ColorMap max-lg:w-[61px] max-md:h-[65px] max-md:w-[52px]" />
        <h1 className="font_montserrat max-lg:[295px] mb-14 mt-6 w-[340px] text-center text-xl font-medium text-textColor max-lg:mb-5 max-lg:mt-6 max-md:mb-8 max-md:mt-3 max-md:w-[259px] max-sm:mb-[50px] max-sm:mt-2 max-sm:w-[269px] max-sm:text-base ">
          Rua Arnóbio Caldeira Franco, 491 Santa Cruz de Minas , MG - CEP
          36328-000
        </h1>
        <span className="h-1 w-40 rounded-sm bg-ColorMap" />
      </div>
      <Link
        href={
          'https://www.google.com/maps/place/Espaço+Emilie+Banko/@-21.121356,-44.226225,18z/data=!4m6!3m5!1s0xa1c7bede5007c5:0x5dabc17d02818434!8m2!3d-21.120952!4d-44.2260448!16s%2Fg%2F11g8bwp32_?hl=pt-BR&entry=ttu'
        }
        target="_blank"
        className="block"
      >
        <div
          id="map"
          className="h-[43rem] w-full max-lg:h-[31rem] max-sm:h-[25rem]"
        />
      </Link>
    </div>
  )
}
