import Link from 'next/link'

export default function Welcome() {
  return (
    <div className="my-24 flex items-center justify-center space-x-24 ">
      <h2 className="font_montserrat w-[370px] text-4xl font-bold text-textColor max-md:w-[240px] max-md:text-xl ">
        Sejam bem-vindos à Emilie Banko
      </h2>
      <div className="text-center">
        <p className="mb-5  w-[700px] text-center  max-lg:w-[500px] max-md:w-[450px] max-sm:w-[340px]">
          Bem-vindo à Emilie Banko, a empresa líder em aluguel de casa por
          temporada para eventos especiais! Somos especializados em fornecer
          espaços únicos e acolhedores para casamentos, aniversários, reuniões e
          muito mais. Nossas propriedades exclusivas em destinos privilegiados
          ao redor do mundo estão prontas para tornar seu evento inesquecível.
          Nossa equipe experiente está aqui para ajudá-lo em todas as etapas,
          desde a escolha da propriedade ideal até a coordenação dos detalhes
          logísticos. Venha fazer parte da família Emilie Banko, onde os
          momentos especiais ganham vida!
        </p>
        <Link href={'/accommodations'}>
          <button className="font_inter rounded-xl border-4  border-bgButton bg-bgButton px-6 py-4 font-bold text-textButton  hover:border-solid hover:bg-transparent ">
            Conheça Nossas Acomodações
          </button>
        </Link>
      </div>
    </div>
  )
}
