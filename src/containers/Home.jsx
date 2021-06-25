import React from 'react'
import {Provider} from 'react-redux'
import generateStore from '../redux/store'
import Carousel from '../components/Carousel'
import Marketing from '../components/Marketing'
import Navbar from '../components/Navbar'
import Ventas from '../components/Ventas'
import ApiNoticias from './ApiNoticias'
import Footer from '../components/Footer'
import Contacto from '../components/Contacto'

export default function Home() {

  const store = generateStore()

    return (
      <Provider store={store}>
        <section class="w-screen h-screen">
              <div class="w-screen mx-0 px-0">
                <Navbar/>
                <Carousel/>
                <Ventas/>
                <Marketing/>
                <ApiNoticias/>
                <Contacto/>
                <Footer/>
              </div>
        </section>
      </Provider>
    )
}