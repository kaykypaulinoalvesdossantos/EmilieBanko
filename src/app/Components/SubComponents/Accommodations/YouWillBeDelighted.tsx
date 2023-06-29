import Link from 'next/link'

export default function YouWillBeDelighted() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <h2 className="font_montserrat text-center text-6xl font-bold text-pColorDarkRed max-lg:text-5xl max-md:text-4xl   ">
        Você irá se encantar!
      </h2>
      <p className=" mb-12 mt-8 w-[1000px] text-center text-2xl font-normal text-pColorDarkRed max-lg:w-[750px] max-lg:text-base max-md:mt-5 max-md:w-[650px] max-md:text-sm max-sm:mb-4 max-sm:mt-4 max-sm:w-[350px]">
        Nossas acomodações na são cuidadosamente projetadas para oferecer o
        máximo de conforto aos nossos hóspedes. Com vários quartos bem decorados
        e mobiliados, garantimos uma estadia aconchegante e relaxante. Cada
        quarto é equipado com comodidades essenciais, como ar-condicionado,
        Wi-Fi de alta velocidade e TV. Além disso, pensando no seu bem-estar,
        alguns quartos possuem banheiras de hidromassagem, proporcionando
        momentos de puro relaxamento. Para sua conveniência, também
        disponibilizamos frigobar em todas as acomodações. Seja para uma estadia
        curta ou prolongada, nosso objetivo é garantir que você se sinta em
        casa. Reserve agora e desfrute de um ambiente acolhedor e cheio de
        conforto!
      </p>
      <Link
        href={
          'https://e.customeriomail.com/e/c/eyJlbWFpbF9pZCI6ImRnU1JpQWNCQU9xaWZlbWlmUUdKQUVBLTNIbVFGaVVzVXFRU2NfQT0iLCJocmVmIjoiaHR0cHM6Ly9jb250YXRlLm1lL2VtaWxpZS1iYW5rbyIsImludGVybmFsIjoiOTE4ODA3NDRhOTYxZWFhMjdkIiwibGlua19pZCI6MjR9/07115b1fd7a19811050d0899a5766c709ca365d348046d3446afc329524e28ba'
        }
        target="_blank"
      >
        <button className="font_inter rounded-xl border-4  border-bgButton bg-bgButton px-6 py-4 font-bold text-textButton  hover:border-solid hover:bg-transparent ">
          Entre em Contato!
        </button>
      </Link>
    </div>
  )
}
