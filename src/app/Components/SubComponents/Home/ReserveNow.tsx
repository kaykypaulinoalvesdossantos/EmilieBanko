import Link from 'next/link'

export default function ReserveNow() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-7">
      <h3 className="font_montserrat text-4xl font-bold text-textColor">
        Reserve Já
      </h3>
      <p className="w-[30rem] text-center text-colorPText max-sm:w-72 max-sm:text-sm">
        Não perca tempo e garanta sua casa por temporada! Viva momentos
        inesquecíveis com seus entes queridos.
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
