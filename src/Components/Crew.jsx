import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import desktop from '../assets/crew/background-crew-desktop.jpg'
import tablet from '../assets/crew/background-crew-tablet.jpg'
import mobile from '../assets/crew/background-crew-mobile.jpg'
import douglas from '../assets/crew/image-douglas-hurley.webp'
import mark from '../assets/crew/image-mark-shuttleworth.webp'
import victor from '../assets/crew/image-victor-glover.webp'
import anosheh from '../assets/crew/image-anousheh-ansari.png'
import data from '../assets/data.json'

function ElementoBoton({ id, name, esActivado, onAction }) {
  const claseCSS = esActivado ? 'size-4 rounded-full bg-white' : 'cursor-pointer size-4 rounded-full bg-white/50';
  return (
    <div className={`${claseCSS} `} onClick={() => onAction(id)}>
      {name}
    </div>
  )
}


function Crew() {
  const isMobile = useMediaQuery({ query: '(max-width: 40rem)' });
  const isTablet = useMediaQuery({ query: '(max-width: 48rem)' });
  const [index, setIndex] = useState(0)
  const backgroundImage = isMobile ? mobile : isTablet ? tablet : desktop;
  const imagenes = [douglas, mark, victor, anosheh]
  const crews = data.crew
  const [imagen, setImagen] = useState(douglas)

  const [enlaces, setEnlaces] = useState([
    { id: 0, image: douglas, activado: true },
    { id: 1, image: mark, activado: false },
    { id: 2, image: victor, activado: false },
    { id: 3, image: anosheh, activado: false }
  ])

  const handleEnlace = (id) => {
    setEnlaces(enlaces.map(enlace =>
      enlace.id === id ? { ...enlace, activado: true } : { ...enlace, activado: false }
    ))
    setImagen(imagenes[id])
    setIndex(id)
  }

  return (
    <div className='h-dvh flex justify-center lg:flex-row lg:justify-around w-full margin-auto items-center bg-no-repeat bg-cover
    bg- top' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col-reverse relative items-center justify-center lg:grid lg:grid-cols-5 gap-12 lg:place-items-center ' >
        <div className='flex flex-col pl-30 col-span-3 items-start max-w-fit gap-20'>
          <h2 className='text-white pb-24 font-extralight text-center mb-6 text-xl tracking-[2.7px]'>
            <span className='font-bold text-white/30 mr-6'>02</span>
            MEET YOUR CREW
          </h2>
          <div className='flex flex-col gap-6 '>
            <span className='font-space text-white/60 text-2xl uppercase'>{crews[index].role}</span>
            <h2 className='font-space pl-12 lg:pl-0 mt-10 lg:mt-0 text-white uppercase text-center text-3xl lg:text-6xl'>{crews[index].name}</h2>
          </div>
          <p className='w-full px-4  lg:px-0 lg:pr-34 tracking-[2px] text-white text-start font-extralight max-h-42 lg:min-h-42 text-sm/6'>
            {crews[index].bio}
          </p>
          <div className='flex gap-10 justify-start w-full'>
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
          <img src={imagen} alt="" className='w-3xl  absolute -top-20 right-0' />
        </div>
      </div>
    </div>
  )
}
export default Crew