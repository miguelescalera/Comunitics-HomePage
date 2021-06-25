import axios from 'axios'
// CONSTANTES

const dataInicial={
    array:[]
}

//TYPE

const GET_POSTS = 'GET_POSTS'

//REDUCER

export default function postsReducer(state=dataInicial, action){
    switch(action.type){
        case GET_POSTS:
            return{...state, array:action.payload}
        default:
            return state
    }
}

//ACTIONS

export const obtenerPostActions=()=>(dispatch)=>{
    try{
        axios.get('https://comunitics.com/wp-json/wp/v2/posts')
            .then(({data})=>{
                let res=data.map((dato)=>(
                    axios.get(`https://comunitics.com/wp-json/wp/v2/media/${dato.featured_media}`)
                ))
                axios.all(res)
                    .then(axios.spread((...responses) => {
                        const respuesta= data.map((datos,index)=>{
                            return {datos, img:responses[index].data}
                        })
                        dispatch({
                            type: GET_POSTS,
                            payload: respuesta
                        })
                    }))
            })
    }catch(error){
        console.log("ERRORR :( ",error)
    }    
}