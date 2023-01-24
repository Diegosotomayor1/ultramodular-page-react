import React from 'react'
import HeadSection from './HeadSection'
import Servicio from './Servicio'
import LayoutInner from './templates/LayoutInner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'

const Servicios = () => {
  const servicios = [
    {
      title: 'Módulos y stands comerciales',
      img: 'servicio1.jpg',
      descripcion: ''
    },
    {
      title: 'Arquitectura de interiores',
      img: 'servicio2.jpg',
      descripcion: ''
    },
    {
      title: 'arquitectura para eventos',
      img: 'servicio3.jpg',
      descripcion: ''
    },
    {
      title: 'Infraestructura y equipamiento para ferias y eventos',
      img: 'servicio3.jpg',
      descripcion: ''
    }
  ]
  return (
    <LayoutInner>
      <div className='h-screen w-full '>
        <HeadSection title='Servicios' />
        <div className='w-5/6 mx-auto mt-36 flex md:flex-row items-center justify-center gap-8'>
          <Swiper
            navigation
            zoom
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay, Zoom]}
            slidesPerView={window.innerWidth > 720 ? 3 : 1}
          >
            {servicios.map(servicio => (
              <SwiperSlide key={servicio.title}>
                <Servicio
                  title={servicio.title}
                  img={servicio.img}
                  descripcion={servicio.descripcion}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </LayoutInner>
  )
}

export default Servicios
