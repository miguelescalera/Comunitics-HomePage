import React from 'react'
import LogoFooter from '../assets/logo-Comunitics-B.png'


export default function Footer() {
    return (
        <div class="w-screen h-full bg-black p-14">
            <div class="grid justify-center text-white sm:my-12 gap-9 sm:grid-cols-2 lg:grid-cols-4 md:mx-24 ">
                <div class="mx-3 mr-7">
                    <div class ="w-29 h-20 mb-5">
                        <img src={LogoFooter} alt="Logo-Footer"/>
                    </div>
                    <div class="opacity-50 text-sm mb-5">
                        <h2>Ramón Ramírez N5, Piso 2, A1 <br/> Santa Cruz de Bezana, Cantabria</h2>
                    </div>
                    <div class="flex items-center h-5 w-1/2 gap-4">
                        <a  class="hover:text-red-600" href="algunlugar"><i class="fab fa-facebook"></i></a>
                        <a  class="hover:text-red-600" href="algunlugar"><i class="fab fa-twitter"></i></a>
                        <a  class="hover:text-red-600" href="algunlugar"><i class="fab fa-instagram"></i></a>
                        <a  class="hover:text-red-600" href="algunlugar"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="mx-3">
                    <h2 class="pb-6 font-bold">Servicios</h2>
                    <div class="opacity-50">
                        <ul>
                            <li><a class="underlined mb-1" href="algunlugar">Análisis y consultoria</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Marketing Online</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Soluciones de software</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Comercio Electrónico</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Desarrollo web</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Diseño grafico</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Formación</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mx-3">
                        <h2 class="pb-6 font-bold">General</h2>
                    <div class="opacity-50">
                        <ul>
                            <li><a class="underlined mb-1" href="algunlugar">Blog</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Equipo</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">inicio</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mx-3">
                        <h2 class="pb-6 font-bold">Legal</h2>
                    <div class="opacity-50">
                        <ul>
                            <li><a class="underlined mb-1" href="algunlugar">Aviso Legal</a></li>
                            <li><a class="underlined mb-1" href="algunlugar">Politica Privacidad</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
