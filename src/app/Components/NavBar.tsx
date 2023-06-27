'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/Img/logo.png'
import { useState } from 'react'

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => {
    if (navbar === true) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }
  return (
    <nav className="flex items-center justify-around bg-bgNavBar pb-2 pt-2">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          className="sm:w-8 md:w-10 lg:w-16"
          alt="Logo Emilie Banko"
        />
        <h1 className="font_logo">Emilie Banko</h1>
      </div>
      <button
        className="flex hidden justify-center max-md:block"
        onClick={handleClick}
      >
        {!navbar && <Menu className="text-whiteColor" />}
      </button>
      {/* menu huburgue */}
      {navbar && (
        <div className="absolute right-0 top-0 hidden max-md:block ">
          <button className=" absolute right-4 top-4 " onClick={handleClick}>
            {navbar && <X className="  h-8 w-8 text-whiteColor" />}
          </button>
          <ul className="flex flex-col gap-7 rounded-l-3xl bg-bgNavBar px-20 py-56 text-center text-4xl font-bold text-whiteColor shadow-navBarShadow ">
            <li className=" ">
              <Link href="/">Inicio</Link>
            </li>
            <li className=" ">
              <Link href="/accommodations">Acomodações</Link>
            </li>
            <li className=" ">
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      )}
      {/* menu link */}
      <div className="relative block max-md:hidden">
        <ul className="flex gap-7 font-bold text-whiteColor ">
          <li className=" ">
            <Link href="/">Inicio</Link>
          </li>
          <li className=" ">
            <Link href="/accommodations">Acomodações</Link>
          </li>
          <li className=" ">
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
