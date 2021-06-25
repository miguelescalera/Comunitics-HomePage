import React, {useState} from 'react'
import Hamburger from './Hamburger'
import Logo from '../assets/logo-letras-negro.png'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <section class="h-full w-screen">        
            <div class="flex flex-row justify-between w-screen h-12 bg-white px-5 border-b-2 fixed top-0 z-50 shadow-md">     
                <div class="w-30 h-13 mt-2.3 cursor-pointer z-30">
                        <img class="w-29 p-1" src={Logo} alt="Logo Comunitics" />
                </div>
                <div class="hidden items-center gap-5 md:flex">
                        <a class="underlined" href="https://www.facebook.com/comunitics.es/" rel="noreferrer" target="_blank">Facebook</a>
                        <a class="underlined" href="https://twitter.com/_comunitics_" rel="noreferrer" target="_blank">Twitter</a>
                        <a class="underlined" href="https://www.instagram.com/comunitics/" rel="noreferrer" target="_blank">Instagram</a>
                        <a class="underlined" href="https://www.linkedin.com/company/comunitics/?originalSubdomain=es" rel="noreferrer" target="_blank">Linkedin</a> 
                </div>
                <div class="flex items-center gap-6 select-none">
                    <div class="hidden gap-2 lg:flex">
                        <input class="border-b-2 border-red-700 outline-none text-center w-auto" type="text" placeholder="Search Keyword" name="text" id="text"/>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div class="flex items-center text-black-500 cursor-pointer">
                        <svg onClick={()=>setOpen(true)} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
        
            </div>
            <Hamburger open={open} setOpen={setOpen}/>
        </section>
    )
}