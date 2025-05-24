import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
/*
import desktop from '../assets/technology/background-technology-desktop.jpg'
import tablet from '../assets/technology/background-technology-tablet.jpg'
import mobile from '../assets/technology/background-technology-mobile.jpg'
import vehicle from '../assets/technology/image-douglas-hurley.webp'
import mark from '../assets/technology/image-mark-shuttleworth.webp'
import victor from '../assets/technology/image-victor-glover.webp'
import anosheh from '../assets/technology/image-anousheh-ansari.png'*/
import data from '../assets/data.json'

function ElementoBoton({ id, name, esActivado, onAction }) {
  const claseCSS = esActivado ? 'size-4 rounded-full bg-white' : 'cursor-pointer size-4 rounded-full bg-white/50';
  return (
    <div className={`${claseCSS} `} onClick={() => onAction(id)}>
      {name}
    </div>
  )
}


function Tecnology() {
  const isMobile = useMediaQuery({ query: '(max-width: 40rem)' });
  const isTablet = useMediaQuery({ query: '(max-width: 48rem)' });
  const [index, setIndex] = useState(0)
  const backgroundImage = isMobile ? '/assets/technology-mobile.jpg' : isTablet ? '/assets/technology-tablet.jpg' : '/assets/technology/background-technology-desktop.jpg';
  //const imagenes = [douglas, mark, victor, anosheh]
  const crews = data.crew
  const [imagen, setImagen] = useState('')

  const [enlaces, setEnlaces] = useState([
    { id: 0, activado: true },
    { id: 1, activado: false },
    { id: 2, activado: false },
    { id: 3, activado: false }
  ])

  const handleEnlace = (id) => {
    setEnlaces(enlaces.map(enlace =>
      enlace.id === id ? { ...enlace, activado: true } : { ...enlace, activado: false }
    ))
    setImagen(imagenes[id])
    setIndex(id)
  }

  return (
    <div className='min-h-dvh relative flex justify-center lg:flex-row lg:justify-around w-full margin-auto items-center bg-no-repeat bg-cover
    bg- top' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col-reverse  items-center justify-center lg:grid lg:grid-cols-5 gap-12 lg:place-items-center ' >
        <div className='flex flex-col px-4 lg:pl-30 col-span-3 items-start max-w-fit gap-9'>
          <h2 className='text-white lg:pb-24 font-extralight text-center lg:mb-6 text-xl tracking-[2.7px]'>
            <span className='font-bold text-white/30 lg:mr-6'>02</span>
            MEET YOUR CREW
          </h2>
          <div className='flex flex-col lg:gap-6 '>
            <span className='font-space text-white/60 text-2xl uppercase'>{crews[index].role}</span>
            <h2 className='font-space lg:pl-0 mt-2 lg:mt-0 text-white uppercase text-3xl lg:text-6xl'>{crews[index].name}</h2>

            <p className=' lg:w-3/5 px-4 tracking-[2px] text-white  font-extralight text-sm/6.5'>
              {crews[index].bio}
            </p>
          </div>
          <div className='flex gap-10 justify-center lg:justify-start w-full'>
            {enlaces.map(item => (
              <ElementoBoton
                key={item.id}
                id={item.id}
                // image={item.image}
                esActivado={item.activado}
                onAction={handleEnlace} />
            ))}
          </div>
        </div>
        <div className='flex flex-col col-span-2 gap-20 '>
          <img src={imagen} alt="" className='lg:w-2xl object-contain lg:absolute lg:bottom-0 lg:right-0' />
        </div>
      </div>
    </div>
  )
}

export default Tecnology