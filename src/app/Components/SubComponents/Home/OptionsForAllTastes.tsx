import Img from '../../../../../public/Img/327691101_573498604637961_7227717472882833476_n.jpg'
import Img2 from '../../../../../public/Img/344383232_1423682238388471_2488840116323363720_n.jpg'
import Img3 from '../../../../../public/Img/342382278_781197200278115_4843577159691609571_n.jpg'
import Image from 'next/image'

export default function OptionsForAllTastes() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center gap-16">
      <h2 className="font_indie_flower text-center text-4xl text-textColor md:text-5xl xl:text-7xl">
        Opções para Todos os Gostos
      </h2>
      <div className="flex flex-col justify-center space-y-20">
        <div className="flex items-center justify-center text-start max-sm:flex-col md:ml-6 lg:ml-8">
          <Image
            src={Img}
            alt={''}
            className="h-[300px] w-[300px] rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center space-y-6 max-md:ml-5 max-sm:mt-5 max-sm:items-center lg:ml-12 xl:ml-20">
            <span className="font_montserrat text-2xl font-bold text-textColor sm:text-base md:text-xl">
              Casamentos
            </span>
            <p className="w-[500px] text-colorPText max-md:w-[300px] max-md:text-sm max-sm:w-80 max-sm:text-center max-sm:text-xs">
              Celebre o amor em grande estilo na nossa encantadora casa. Com
              paisagens deslumbrantes e amplos espaços, oferecemos o local
              perfeito para tornar seu casamento uma experiência memorável.
              Reserve agora e viva um conto de fadas em nossa casa dos sonhos.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center text-start max-sm:flex-col md:ml-6 lg:ml-8">
          <div className="flex  flex-col justify-center space-y-6 max-md:mr-4 max-sm:mb-5 max-sm:items-center lg:ml-12 xl:ml-20">
            <span className="font_montserrat text-2xl font-bold text-textColor sm:text-base md:text-xl">
              Aniversários
            </span>
            <p className="w-[500px]  text-colorPText max-md:w-[300px] max-md:text-sm max-sm:w-80 max-sm:text-center max-sm:text-xs">
              Celebre seu aniversário em grande estilo na nossa incrível casa.
              Surpreenda seus convidados com uma festa inesquecível em um
              cenário encantador. Reserve agora e prepare-se para viver momentos
              memoráveis!
            </p>
          </div>
          <Image
            src={Img2}
            alt={''}
            className="h-[300px] w-[300px] rounded-xl object-cover"
          />
        </div>

        <div className="flex items-center justify-center text-start max-sm:flex-col md:ml-6 lg:ml-8">
          <Image
            src={Img3}
            alt={''}
            className="h-[300px] w-[300px] rounded-xl object-cover"
          />
          <div className="flex flex-col justify-center space-y-6 max-md:ml-5 max-sm:mt-5 max-sm:items-center lg:ml-12 xl:ml-20">
            <span className="font_montserrat text-2xl font-bold text-textColor sm:text-base md:text-xl">
              Eventos
            </span>
            <p className="w-[500px]  text-colorPText max-md:w-[300px] max-md:text-sm max-sm:w-80 max-sm:text-center max-sm:text-xs">
              Realize seu evento dos sonhos na nossa casa. Com ambientes
              versáteis e espaços amplos, oferecemos o local perfeito para
              tornar qualquer ocasião especial e memorável. Seja um casamento,
              aniversário, reunião corporativa ou qualquer outra celebração,
              nossa propriedade proporciona um cenário encantador que se adapta
              às suas necessidades. Desfrute da privacidade e elegância deste
              espaço exclusivo, cercado por paisagens deslumbrantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
