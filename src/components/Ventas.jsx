import React from 'react'
import Ojo from '../assets/icono-ojo.png'
import Torre from '../assets/icono-torre.png'

export default function Ventas() {
    return (
        <div class="flex h-full md:h-screen w-screen">
            <div class="w-screen h-full flex flex-col items-center md:flex-row py-20 px-6 sm:px-14 md:gap-5">
                <div class="flex flex-row justify-center h-full sm:w-6/12 md:m-auto md:flex-col">
                    <div class="flex flex-col justify-start w-full mb-4 md:m-10"> 
                    <div>
                        <h3 class="text-2xl lg:text-3xl inline-block font-bold"><span class="text-red-600">Potenciamos </span>tus ventas</h3>
                        <h3 class="text-2xl lg:text-3xl inline-block font-bold"><span class="text-red-600">Hacemos </span>crecer tu marca</h3>
                    </div>
                        <span class="btn pulse rounded bg-red-600 py-2 mt-12 mx-auto md:mx-0 cursor-pointer font-semibold hover:shadow-lg">Quiero vender más</span>
                    </div>
                </div>
                <div class="grid grid-flow-row gap-4 my-auto h-full md:grid-flow-col md:w-6/12 md:items-center">
                    <div class="flex flex-col justify-start pt-5 mx-auto h-full sm:w-auto sm:h-auto">
                        <img class="w-24 h-24 mb-4" src={Ojo} alt="Logo-ojo"/>
                        <h3 class="font-bold pb-5">Ideas de vanguardia</h3>
                        <p class="w-auto opacity-50">La innovación constante es la única forma de mantenerse vivo, porque ninguna ventaja es sostenible a largo plazo.</p>
                    </div>
                    <div class="flex flex-col justify-start pt-5 mx-auto h-full sm:w-auto sm:h-auto sm:justify-start">
                        <img  class ="w-20 h-24 mb-4" src={Torre} alt="Logo-torre"/>
                        <h3 class="font-bold pb-5">Transformacion digital</h3>
                        <p class="w-auto opacity-50">Automatizando procesos, minimizando costes, mejorando la comunicación, rompiendo fronteras geográficas y maximizando la eficiencia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
