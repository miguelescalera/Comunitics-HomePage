import React from 'react'

export default function Contacto() {
    return (
        <div class="w-screen h-full bg-red-600 flex justify-center">
            <div class="flex items-center flex-col justify-center py-10 w-9/12 text-white md:justify-between md:flex-row ">
                <div class="text-xl pb-3 md:text-2xl font-bold">
                    <h3 class="textmaquina px-1">Cuéntanos tu proyecto<strong class="punto">_</strong><span class="maquinabarra">&#160;</span></h3>
                </div>
                    <span class="pulse bg-white h-10 w-28 text-black px-4 py-2 text-sm font-semibold shadow-lg rounded cursor-pointer hover:text-red-600"> Contáctanos</span>
            </div>
        </div>
    )
}
