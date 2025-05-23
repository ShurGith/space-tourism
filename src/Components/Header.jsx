import Navbar from './Partials/Navbar'
import star from '../assets/star.svg'
function Header() {
  return (
    <div className='fixed top-10 flex justify-center w-full items-center gap-2 pl-12'>
      <img src={star} className='size-12' alt="" />
      <div className='w-full h-[1px] bg-white translate-x-6'></div>
      <Navbar />

    </div>
  )
}

export default Header