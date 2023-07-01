import { Dispatch, SetStateAction } from 'react'
import SliderAccommodations from '../SliderAccommodations/SliderAccommodations'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  card: any
}

export default function Modal({ isOpen, setIsOpen, card }: ModalProps) {
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen && (
        <div className="relative flex flex-col items-center justify-center rounded-lg bg-white py-8 shadow-navBarShadow">
          <button onClick={closeModal} className="absolute right-2 top-2 ">
            <X className="w-10" />
          </button>
          <SliderAccommodations images={card.slide} />
          <h3 className="mb-8 mt-3 text-2xl font-bold text-textColor">
            {card?.name}
          </h3>
          <p className="mx-5 w-[500px] text-center text-xl text-textColor max-md:w-[400px] max-md:text-lg max-sm:mx-3 max-sm:w-[300px] max-sm:text-base max-cell:mx-2">
            {card?.information}
          </p>
        </div>
      )}
    </>
  )
}
