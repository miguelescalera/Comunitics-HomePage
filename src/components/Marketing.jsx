import React from 'react'

export default function marketing() {

    return (
        <section class="h-full sm:h-4/5 w-screen">
            <div class=" h-2/5 w-full relative bg-cover bg-center" style={{backgroundImage:"url('https://comunitics.com/wp-content/uploads/2019/10/inicio-grupo-creativo_7508010.jpg')", height:"300px"}} >
                <div class="pt-20"></div>
                <div class="w-screen h-2/5 flex items-center justify-center">
                <h2 class="text-center w-3/4 sm:w-1/2 bg-gray-100 bg-opacity-40 text-4xl font-bold text-black">Un equipo de <mark class="bg-transparent text-red-600"> personas creativas.</mark></h2>
                </div> 
                <div class="pb-20"></div>           
            </div>
            <div class="w-full h-2/5 flex flex-col items-center my-6 sm:flex-row sm:p-5">
                <div class="w-full px-10 sm:w-1/2 h-2/4">
                    <h2 class="text-xl pb-6 font-bold sm:px-6 md:2xl lg:text-3xl">Tu propio <mark class="bg-transparent text-red-600">departamento de marketing profesional</mark>, listo para conseguir tus <br/>objetivos desde el primer día</h2>
                </div>
                <div class="w-full px-10 sm:w-1/2 h-2/4">
                    <div class="w-full sm:pl-6 pb-6">
                        <h3 class=" text-xs uppercase font-bold pb-3">861 campañas</h3>
                        <div class="relative w-full sm:w-3/4 bg-gray-100 rounded">
                            <div style={{width: "0%"}} class="absolute top-0 h-1 rounded bar uno bg-indigo-500"></div>
                        </div>
                    </div>
                    <div class="w-full sm:pl-6 pb-6">
                        <h3 class=" text-xs uppercase font-bold pb-3">540.000 impactos de marca</h3>
                        <div class="relative w-full sm:w-3/4 bg-gray-100 rounded">
                            <div style={{width: "0%"}} class="absolute top-0 h-1 rounded bar dos bg-red-500"></div>
                        </div>
                    </div>
                    <div class="w-full sm:pl-6 pb-6">
                        <h3 class=" text-xs uppercase font-bold pb-3">3712 leads cualificados</h3>
                        <div class="relative w-full sm:w-3/4 bg-gray-100 rounded">
                            <div style={{width: "0%"}} class="absolute top-0 h-1 rounded bar tres bg-yellow-500"></div>
                        </div>
                    </div>
                    <div class="w-full sm:pl-6 pb-6">
                        <h3 class=" text-xs uppercase font-bold pb-3">+450.000€ de retorno económico</h3>
                        <div class="relative w-full sm:w-3/4 bg-gray-100 rounded">
                            <div style={{width: "0%"}} class="absolute top-0 h-1 rounded bar cuatro bg-yellow-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}     