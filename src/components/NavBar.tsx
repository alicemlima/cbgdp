"use client"
import { useState } from "react"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Link from 'next/link';

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "",
    },
    {
        label: "Institucional",
        page: "/institucional",
    },
    {
        label: "Local",
        page: "/local",
    },
    {
        label: "Programação",
        page: "/programacao",
    },
    {
        label: "Submissões",
        page: "/submissoes",
    },
    {
        label: "Inscrições",
        page: "/inscricoes",
    },

]

export default function NavBar() {
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-10 bg-pallete-white text-pallete-orange border-b border-b-pallete-blue shadow-xl">
            <div className="justify-between lg:items-center lg:flex">
                <div>
                    <div className="flex items-center justify-between py-3 pr-5">
                        <div className="flex items-center justify-between">
                            <div className="container flex items-center space-x-2 max-w-[50%] lg:max-w-[70%] ">
                                <a href="https://www.igdp.org.br/cbgdp2021/">
                                <img className="max-h-fill" src="https://www.igdp.org.br/cbgdp2021/wp-content/uploads/logo_cbgdp.png" alt="" width="auto" height="10" /></a>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>

                </div>

                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                        }`}>
                        <div className="items-center justify-center space-y-3 lg:flex lg:space-x-3 lg:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.page}
                                        className={
                                            "block lg:inline-block hover:bg-pallete-orange hover:text-pallete-white p-2 rounded-lg cursor-pointer text-lg"
                                        }
                                         onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </header>        )
}

