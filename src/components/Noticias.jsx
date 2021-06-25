import React from 'react'

export default function Noticias({post}) {
    const array = post.slice(0,4)

    return (
        <div class="h-full w-screen bg-gray-100 md:px-14 pb-10 sm:pb-20">
            <h3 class="w-full flex text-center justify-center pt-20 pb-10 text-2xl font-bold"> Actualidad y publicaciones</h3>
            {(post.length === 0) ? 
                <div class="w-full h-full my-20">
                        <span class="flex items-center text-center text-red-600 justify-center h-full w-full">
                            <li class="animate-bounce list-none rounded"> Loading...</li>
                        </span>
                </div>
            :
                array.map((P, index)=>(
                    <div key={index} class="h-full w-11/12 mx-auto bg-white mb-7 sm:w-9/12">
                            <img src={P.img.guid.rendered} alt="ImagenPortada"/>
                        <div class="px-7 py-9">
                            <h3 class="text-xl font-bold pb-2"><a href="algo">{P.datos.title.rendered}</a></h3>
                            <div class="flex flex-row text-xs space-x-2 border-b-2 mb-2">
                                <p>{(P.datos.date).substring(0,10)}</p>
                                <a href="algo">categoria </a>
                                <a href="algo">categoria </a>
                                <a href="algo">categoria </a>
                            </div>
                            <div class="text-xs">
                                {P.datos.excerpt.rendered.substring(3, 300)}...
                            </div>
                        </div>
                    </div>
                ))
            } 
        </div>
    )
}
