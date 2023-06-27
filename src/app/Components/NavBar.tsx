'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../../public/Img/logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const Links = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Acomodações',
      link: '/accommodations',
    },
    {
      name: 'Sobre',
      link: '/about',
    },
  ]

  return (
    <nav className="w-full shadow-md">
      <div className="items-center justify-between bg-bgNavBar px-7 py-4 md:flex md:px-10">
        <Link
          href={'/'}
          className="flex cursor-pointer items-center  text-2xl  text-black sm:text-sm 
      md:text-xl"
        >
          <Image
            src={Logo}
            className="sm:w-8 md:w-10 lg:w-16"
            alt="Logo Emilie Banko"
          />
          <h1 className="font_logo">Emilie Banko</h1>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          {open ? (
            <Menu className="hidden" />
          ) : (
            <Menu className="text-center text-whiteColor" />
          )}
        </div>

        <ul
          className={`absolute top-0 flex flex-col items-center gap-14 rounded-l-3xl bg-bgNavBar px-20 py-56 shadow-navBarShadow transition-all duration-500 ease-in md:static md:z-auto
            md:w-auto md:flex-row md:items-center md:px-0 md:py-0 ${
              open ? 'right-0 ' : 'right-[-490px] shadow-none'
            }`}
        >
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
          >
            {open ? (
              <X className="text-whiteColor" />
            ) : (
              <X className="hidden" />
            )}
          </div>
          {Links.map((link) => (
            <li key={link.name} className="text-4xl md:text-base">
              <Link
                href={link.link}
                className="text-whiteColor duration-500 hover:text-hoverWhiteColor"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
