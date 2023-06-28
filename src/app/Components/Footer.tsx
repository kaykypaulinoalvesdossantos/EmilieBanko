import Image from 'next/image'
import Facebook from '../../../public/Img/Icons/facebook.png'
import AriBnb from '../../../public/Img/Icons/airbnb.png'
import Instagram from '../../../public/Img/Icons/instagram.png'
import Whatsapp from '../../../public/Img/Icons/whatsapp.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flx mt-24 w-full flex-col items-center justify-center bg-BgColorRed py-20 text-center ">
      <div className="mb-8 flex items-center justify-center space-x-14">
        <Link
          href={
            'https://e.customeriomail.com/e/c/eyJlbWFpbF9pZCI6ImRnU1JpQWNCQU9xaWZlbWlmUUdKQUVBLTNIbVFGaVVzVXFRU2NfQT0iLCJocmVmIjoiaHR0cHM6Ly9jb250YXRlLm1lL2VtaWxpZS1iYW5rbyIsImludGVybmFsIjoiOTE4ODA3NDRhOTYxZWFhMjdkIiwibGlua19pZCI6MjR9/07115b1fd7a19811050d0899a5766c709ca365d348046d3446afc329524e28ba'
          }
          target="_blank"
        >
          <Image src={Whatsapp} alt={''} className="w-12 max-md:w-8" />
        </Link>

        <Link
          href={'https://www.instagram.com/espacoemiliebanko/'}
          target="_blank"
        >
          <Image src={Instagram} alt={''} className="w-12 max-md:w-8" />
        </Link>

        <Link
          href={'https://www.facebook.com/espacoemiliebanko/'}
          target="_blank"
        >
          <Image src={Facebook} alt={''} className="w-12 max-md:w-8" />
        </Link>

        <Link
          href={
            'https://www.airbnb.com.br/rooms/27197469?adults=1&children=0&enable_m3_private_room=false&infants=0&pets=0&check_in=2023-04-25&check_out=2023-04-30&federated_search_id=0af3cef3-f31d-486b-b675-471e114fac45&source_impression_id=p3_1687985906_3DUbWTsLz5an5ydq'
          }
          target="_blank"
        >
          <Image src={AriBnb} alt={''} className="w-12 max-md:w-8" />
        </Link>
      </div>
      <h2 className="font_montserrat font-bold text-whiteColor">
        @ 2023 Todos os Direitos Reservados
      </h2>
    </footer>
  )
}
