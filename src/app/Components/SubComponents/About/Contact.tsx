import Link from 'next/link'

export default function Contact() {
  return (
    <div className="mt-24 flex justify-center space-x-36 max-lg:mt-20 max-md:mt-12 max-md:space-x-20 max-sm:space-x-8 ">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="font_montserrat text-4xl font-bold text-textColor max-md:text-3xl max-sm:text-2xl">
          Contatos
        </h2>
        <h1 className="font_montserrat mb-3 mt-5 text-4xl font-medium text-textColor max-md:text-3xl max-sm:text-2xl">
          Emilie Banko
        </h1>
        <p className="text-xl max-md:text-base max-sm:text-sm ">
          Visite nosso SuperHost Airbnb
        </p>
        <Link
          href={
            'https://e.customeriomail.com/e/c/eyJlbWFpbF9pZCI6ImRnU1JpQWNCQU9xaWZlbWlmUUdKQUVBLTNIbVFGaVVzVXFRU2NfQT0iLCJocmVmIjoiaHR0cHM6Ly9jb250YXRlLm1lL2VtaWxpZS1iYW5rbyIsImludGVybmFsIjoiOTE4ODA3NDRhOTYxZWFhMjdkIiwibGlua19pZCI6MjR9/07115b1fd7a19811050d0899a5766c709ca365d348046d3446afc329524e28ba'
          }
          target="_blank"
          className="mt-12 max-md:mt-10 max-sm:mt-7"
        >
          <button className="font_inter rounded-xl border-4  border-bgButton bg-bgButton px-6 py-4 font-bold text-textButton  hover:border-solid hover:bg-transparent ">
            Reserve Já!
          </button>
        </Link>
      </div>
      <span className="h-[460px] w-1 bg-textColor" />
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <h3 className="font_montserrat text-2xl text-textColor max-sm:text-xl">
            Telefones:
          </h3>
          <Link
            href={
              'https://e.customeriomail.com/e/c/eyJlbWFpbF9pZCI6ImRnU1JpQWNCQU9xaWZlbWlmUUdKQUVBLTNIbVFGaVVzVXFRU2NfQT0iLCJocmVmIjoiaHR0cHM6Ly9jb250YXRlLm1lL2VtaWxpZS1iYW5rbyIsImludGVybmFsIjoiOTE4ODA3NDRhOTYxZWFhMjdkIiwibGlua19pZCI6MjR9/07115b1fd7a19811050d0899a5766c709ca365d348046d3446afc329524e28ba'
            }
            target="_blank"
            className="max-sm:mt-2"
          >
            <p className="font_montserrat text-xl text-textColor max-sm:text-base">
              (32) 98503-2616
            </p>
          </Link>
        </div>
        <div>
          <h3 className="font_montserrat text-2xl text-textColor max-sm:text-xl">
            E-mail
          </h3>
          <p className="font_montserrat text-xl text-textColor max-sm:mt-2 max-sm:text-base">
            espacoemiliebanko@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
