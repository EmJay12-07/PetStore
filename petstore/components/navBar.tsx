"use client"
import Link from 'next/link'
import { useState } from 'react'
 
const Navbar = () => {
const [openNavbar, setOpenNavbar] = useState(false)
const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar)
}
return (
    <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
            <nav className="flex justify-between items-center h-full">
                <div className="flex min-w-max items-center">
                    <Link href="/" className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                        <div className="flex items-center -space-x-3 font-semibold">
                            <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                            <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
                        </div>
                        Pet Store
                    </Link>
                </div>
                <div className={`
            flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${openNavbar ? "visible opacity-100 translate-y-0" : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"}
          `}>
                    <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
                        <li>
                            <Link href="/" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Pets
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Toys
                            </Link>
                        </li>
                        
                    </ul>
                    <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
                        <Link href="/cart" className="flex justify-center gap-x-3 items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                    border-b bg-gray-700 dark:border-blue-300 hover:border-b-gray-900 dark:hover:border-b-white bg-transparent">
                            Cart
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-end relative z-60 lg:hidden">
                    <button onClick={() => {
                        toggleNavbar()
                    }} className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
                        <span className="sr-only">
                            toggle navbar
                        </span>
                        <span className={`
                w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
              `} />
                        <span className={`
                w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "scale-x-0 opacity-0" : ""}
              `} />
                        <span className={`
                w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
              `} />
                    </button>
                </div>
            </nav>
        </div>
    </header>
)
}
export default Navbar