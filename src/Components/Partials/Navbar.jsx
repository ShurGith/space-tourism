import NavLinks from "./NavLinks"

function Navbar() {

  return (
    <div className='flex justify-center items-center gap-22 pt-6 h-full w-full backdrop-filter backdrop-blur-sm bg-opacity-5'>
      <NavLinks />
    </div>
  )
}

export default Navbar