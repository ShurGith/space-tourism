import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center pl-14 items-center gap-6  pt-6 h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100'>
      <NavLink to="/" className="text-white pb-6"><span className='font-bold mr-2'>00</span> Home</NavLink>
      <NavLink to="/destination" className="text-white pb-6"><span className='font-bold mr-2'>01</span> Destination</NavLink>
      <NavLink to="/crew" className="text-white pb-6"><span className='font-bold mr-2'>02</span> Crew</NavLink>
      <NavLink to="/tecnology" className="text-white pb-6"><span className='font-bold mr-2'>03</span> Tecnology</NavLink>
    </div>
  )
}

export default Navbar