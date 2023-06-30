import Link from 'next/link'
import SliderHighlights from './SliderHighlights/SliderHighlights'

export default function Highlights() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-12 bg-BgColorRed py-14 max-md:mt-12">
      <h3 className="font_montserrat text-4xl font-bold text-whiteColor max-md:text-3xl max-sm:text-xl">
        Destaques
      </h3>
      <SliderHighlights />
      <Link href={'/accommodations'} className="mt-12 max-md:mt-10 max-sm:mt-7">
        <button className="font_inter rounded-xl border-4 border-solid border-whiteColor bg-whiteColor px-6 py-4 font-bold text-textColor hover:bg-transparent hover:text-whiteColor max-sm:px-3 max-sm:py-2 ">
          Ver Mais!
        </button>
      </Link>
    </div>
  )
}
