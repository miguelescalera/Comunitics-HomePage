import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPostActions} from '../redux/post'
import Noticias from '../components/Noticias'

export default function ApiNoticias() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(obtenerPostActions())
    }, [dispatch])

    const post = useSelector(store=>store.posts.array)

    return (
        <div class="flex h-full w-screen">
            <Noticias 
               post={post}
            />
        </div>
    )
}