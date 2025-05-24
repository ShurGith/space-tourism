import { useMediaQuery } from 'react-responsive';
import Navbar from './Partials/Navbar'
import NavBarMobile from './Partials/NavBarMobile'
import star from '../assets/star.svg'
function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 765px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1240px)' });

  const mainMenu = isMobile ? <NavBarMobile /> : isTablet ? <Navbar /> : <Navbar />

  return (
    <div className='fixed top-2 lg:top-10 flex justify-end w-full items-center pl-12 z-10'>
      {!isMobile && <img src={star} className='size-12 ml-12 sm:ml-2' alt="" />}
      {!isTablet && <div className='w-full h-[1px] z-1 bg-white translate-x-16'></div>}
      <div className='w-full'> {mainMenu}</div>
    </div>
  )
}

export default Header