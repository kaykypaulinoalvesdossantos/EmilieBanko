import Link from 'next/link'

export default function FindyourPerfectHome() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center">
      <h1 className="font_montserrat text-center text-4xl font-bold text-textColor md:text-5xl lg:text-7xl">
        Encontre sua Casa Perfeita !
      </h1>
      <p className="mb-10 mt-5 text-center text-paragrafoText max-md:w-80 max-sm:w-64 lg:w-96">
        Não perca mais tempo, escolha entre nossas ofertas incríveis e aproveite
        suas férias ao máximo.
      </p>
      <Link href={'/accommodations'}>
        <button className="font_inter rounded-xl border-4  border-bgButton bg-bgButton px-6 py-4 font-bold text-textButton  hover:border-solid hover:bg-transparent ">
          Veja Mais
        </button>
      </Link>
    </div>
  )
}
