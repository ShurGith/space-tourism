import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import desktop from '../assets/destination/background-destination-desktop.jpg'
import tablet from '../assets/destination/background-destination-tablet.jpg'
import mobile from '../assets/destination/background-destination-mobile.jpg'
import Moon from '../assets/destination/image-moon.png'
import Mars from '../assets/destination/image-mars.png'
import Europa from '../assets/destination/image-europa.png'
import Titan from '../assets/destination/image-titan.png'
import data from '../assets/data.json'

function ElementoBoton({ id, name, esActivado, onAction }) {
  const claseCSS = esActivado ? 'border-b-2 border-white text-white text-sm font-extralight pb-2' : 'text-white text-sm font-extralight cursor-pointer pb-2';
  return (
    <div className={`${claseCSS} `} onClick={() => onAction(id)}>
      {name}
    </div>
  )
}


function Destination() {
  const isMobile = useMediaQuery({ query: '(max-width: 40rem)' });
  const isTablet = useMediaQuery({ query: '(max-width: 48rem)' });
  const [index, setIndex] = useState(0)
  const backgroundImage = isMobile ? mobile : isTablet ? tablet : desktop;
  const imagenes = [Moon, Mars, Europa, Titan]
  const destinations = data.destinations
  const [imagen, setImagen] = useState(Moon)

  const [enlaces, setEnlaces] = useState([
    { id: 0, name: 'MOOM', image: Moon, activado: true },
    { id: 1, name: 'MARS', image: Mars, activado: false },
    { id: 2, name: 'EUROPE', image: Europa, activado: false },
    { id: 3, name: 'TITAN', image: Titan, activado: false }
  ])

  const handleEnlace = (id) => {
    setEnlaces(enlaces.map(enlace =>
      enlace.id === id ? { ...enlace, activado: true } : { ...enlace, activado: false }
    ))
    setImagen(imagenes[id])
    setIndex(id)
  }

  return (
    <div className='h-dvh flex justify-center gap-20 lg:flex-row lg:justify-around lg:gap-2 w-full margin-auto items-center bg-no-repeat bg-cover
    bg- top' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-5 gap-12 lg:place-items-center p-4' >
        <div className='flex flex-col col-span-3 gap-20 '>
          <h2 className='text-white font-extralight text-center text-xl tracking-[2.7px]'>
            <span className='font-bold text-white/30 mr-6'>01</span>PICK YOUR DESTINATION</h2>
          <img src={imagen} alt="" className='size-100' />
        </div>
        <div className='flex flex-col col-span-2 items-start gap-4 max-w-fit'>
          <div className='flex gap-10 justify-center lg:justify-start items-center w-full'>
            {enlaces.map(item => (
              <ElementoBoton
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                esActivado={item.activado}
                onAction={handleEnlace} />
            ))}
          </div>
          <h2 className='font-space pl-12 lg:pl-0 mt-10 lg:mt-0 text-white uppercase text-center text-3xl lg:text-8xl'>{destinations[index].name}</h2>
          <p className='w-full px-4 lg:px-0 lg:pr-34 tracking-[2px] text-white text-start font-extralight max-h-42 lg:min-h-42 text-sm/6'>
            {destinations[index].description}
          </p>
          <div className='flex gap-10 border-t-white border-t pt-4'>
            <div className='flex flex-col items-start gap-2'>
              <span className='text-white/70 text-sm'>AVG. DISTANCE</span>
              <span className='font-space text-white text-2xl uppercase'>{destinations[index].distance}</span>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <span className='text-white/70 text-sm'>EST. TRAVEL TIME</span>
              <span className='font-space text-white text-2xl uppercase'>{destinations[index].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination