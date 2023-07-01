'use client'
import { SetStateAction, useState } from 'react'
import Modal from './Modal/Modal'
import { accommodationsConfig } from '@/app/mock/accommodationsConfig'
import SliderAccommodations from './SliderAccommodations/SliderAccommodations'

export default function AccommodationsAbouts() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  function handleCardClick(card: SetStateAction<null>) {
    setSelectedCard(card)
    setIsOpenModal(true)
  }

  return (
    <>
      <div className="mt-28 flex flex-wrap justify-evenly gap-7">
        {accommodationsConfig?.map((config: any) => {
          return (
            <div
              key={config.id}
              className="flex flex-col items-center gap-4  xl:w-1/5"
            >
              <SliderAccommodations images={config.slide} />
              <h3 className="text-2xl font-bold text-textColor">
                {config.name}
              </h3>
              <button
                className="font_inter rounded-xl border-4  border-bgButton bg-bgButton px-6 py-4 font-bold text-textButton  hover:border-solid hover:bg-transparent"
                onClick={() => handleCardClick(config)}
              >
                Ver mais
              </button>
            </div>
          )
        })}
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <Modal
            card={selectedCard}
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
          />
        </div>
      )}
    </>
  )
}
