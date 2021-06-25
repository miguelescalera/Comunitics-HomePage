import React, {useState, useEffect} from 'react'
import LogoMenu from '../assets/logo-Comunitics-NR_trans.png'

export default function Hamburger({setOpen, open}) {

    const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)

    const Element1 = document.querySelector('#subToggle1')
    const Element2 = document.querySelector('#subToggle2')

    const handleToggle= (estado,boton) =>{
        if(boton === "btn1" && btn1 !== true) {
            setBtn1(estado)
            setBtn2(!estado)
            Element1.classList.replace('noMostrar', 'mostrar')
            Element2.classList.replace('mostrar','noMostrar')
        }
        else if(boton === "btn1" && btn1 === true){
            setBtn1(false)
            Element1.classList.replace('mostrar','noMostrar')
        }
        else if(boton === "btn2" && btn2 !== true){
            setBtn2(estado)
            setBtn1(!estado)
            Element2.classList.replace('noMostrar', 'mostrar')
            Element1.classList.replace('mostrar','noMostrar')
        }
        else if(boton === "btn2" && btn2 === true) {
            setBtn2(false)
            Element2.classList.replace('mostrar','noMostrar')
        }
    }

    useEffect(() => {
        const handleMenu= () =>{
            const menu = document.querySelector('#menu')
            if(open) menu.classList.replace('noMostrar', 'mostrar')
            else menu.classList.replace('mostrar', 'noMostrar')
        }
        handleMenu()
    }, [open])

    return (
        <div id='menu' class="noMostrar h-screen w-screen bg-transparent fixed flex-row flex-wrap-reverse sm:flex-nowrap z-50">
                <div class="h-3/4 fadeInDown overflow-auto sm:h-screen w-screen sm:w-1/2 flex justify-center text-center select-none" style={{backgroundColor:"#222"}} >
                    <div class="h-full w-full flex flex-col text-white text-2xl md:text-4xl text-left items-center justify-center">
                        <ul class="w-3/4 h-full flex flex-col justify-center">
                            <li class="p-3"><a class="hover:text-red-600" href="algunlugar">Inicio</a></li>
                                <hr class="opacity-10"/>
                            <li class="p-3 flex flex-col">
                                <div class="flex justify-between items-center">
                                    <a class="hover:text-red-600" href="algunlugar">Servicios</a>
                                    <button onClick={()=>handleToggle(!btn1,"btn1")} class="flex items-center border-red-600 border-2 rounded ml-2 h-5 w-5 select-none"> {(!btn1) ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>}</button>
                                </div>
                                <ul id="subToggle1" class="noMostrar aparecer flex-col text-xl md:text-2xl p-4">
                                    <li><a class="underlined opacity-50" href="algunlado">Análisis y consultoria</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Marketing Online</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Soluciones de software</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Comercio Electrónico</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Desarrollo web</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Diseño Gráfico</a></li>
                                </ul>
                            </li>
                                <hr class="opacity-10"/>
                            <li class="p-3"><a class="hover:text-red-600" href="algunlugar">Formación</a></li>
                                <hr class="opacity-10"/>
                            <li class="p-3"><a class="hover:text-red-600" href="algunlugar">Equipo</a></li>
                                <hr class="opacity-10"/>
                            <li class="p-3 flex flex-col">
                                <div class="flex justify-between items-center">
                                    <a class="hover:text-red-600" href="algunlugar">Blog</a>
                                    <button onClick={()=>handleToggle(!btn2, "btn2")} class="flex items-center border-red-600 border-2 rounded ml-2 h-5 w-5 select-none"> {(!btn2) ?<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>}</button>
                                </div>
                                <ul id="subToggle2" class="noMostrar aparecer flex-col text-xl md:text-2xl p-4">
                                    <li><a class="underlined opacity-50" href="algunlado">Actualidad</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Investigación</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Proyectos</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Empresa</a></li>
                                    <li><a class="underlined opacity-50" href="algunlado">Emprendedores</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="w-auto flex justify-center items-end">
                            <a href="algunlado" class="text-sm hover:text-red-600">info@comunitics.com</a>
                        </div>
                    </div>
                </div>
                <div class="h-1/4 w-screen flex flex-row-reverse text-center select-none bg-white fadeInUp sm:h-screen sm:w-1/2 sm:flex-col">
                    <div class="flex justify-end top-2 right-5 pr-5 pt-1">
                        <svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 cursor-pointer hover:bg-red-600 rounded-full hover:text-white select-none decoration-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div class="h-full flex mx-auto items-center justify-center sm:pb-11">
                        <img class=" h-14 w-27 md:h-40 md:w-60" src={LogoMenu} alt="Logo-menu"/>
                    </div>
                </div>
        </div>
    )
}

// arrow up

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>