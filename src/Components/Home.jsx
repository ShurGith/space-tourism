import { useMediaQuery } from 'react-responsive';
import desktop from '../assets/home/background-home-desktop.jpg'
import tablet from '../assets/home/background-home-tablet.jpg'
import mobile from '../assets/home/background-home-mobile.jpg'

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 40rem)' });
  const isTablet = useMediaQuery({ query: '(max-width: 48rem)' });

  const backgroundImage = isMobile ? mobile : isTablet ? tablet : desktop;

  return (
    <div className='h-dvh flex flex-col justify-center gap-20 lg:flex-row lg:justify-around lg:gap-2 w-full margin-auto items-center bg-no-repeat bg-cover
    bg-top' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col p-4 gap-5 lg:w-1/3 '>
        <div className='flex flex-col items-center gap-5 lg:items-start'>
          <h2 className='text-white font-extralight text-center text-xl tracking-[2.7px]'>SO, YOU WANT TO TRAVEL TO</h2>
          <h2 className='font-space text-white text-center text-9xl'>SPACE</h2>
          <p className='px-6 sm:px-18 lg:px-2 tracking-[2px] text-white text-center lg:text-start font-extralight text-sm/6'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='font-space w-55 h-55 rounded-full bg-white flex justify-center items-center text-black text-3xl'>EXPLORE</button>
      </div>

    </div>
  )
}

export default Home