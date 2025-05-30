import { useState } from "react";
import NavLinks from './NavLinks'
import { Icon } from '@iconify-icon/react';

function NavBarMobile() {
  const [isActive, setIsActive] = useState('false')
  return (
    <div className='flex w-full justify-end relative pt-4'>
      <Icon icon="zondicons:menu" width="24" height="24" className='text-white mr-6'
        onClick={() => setIsActive(!isActive)}
      />
      <div className={`absolute min-w-1/2 top-0 transition duration-300 flex flex-col justify-center items-start pl-6 pt-2 gap-6  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 ${isActive ? "translate-x-[105%]" : "translate-x-0"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="#fff" d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z" />
          <path fill="#fff" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
            onClick={() => setIsActive(!isActive)}
          /></svg>

        <NavLinks />
      </div>
    </div>
  )
}

export default NavBarMobile