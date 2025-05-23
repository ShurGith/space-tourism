import { NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function NavLinks() {
  const isMobile = useMediaQuery({ query: '(max-width: 40rem)' });
  const isTablet = useMediaQuery({ query: '(max-width: 48rem)' });
  return (
    <>
      <NavLink to="/" className="linknav"><span className={`${isMobile || isTablet ? "hidden" : ""} font-bold mr-2`}>00</span> HOME</NavLink>
      <NavLink to="/destination" className="linknav"><span className={`${isMobile || isTablet ? "hidden" : ""} font-bold mr-2`}>01</span> DESTINATION</NavLink>
      <NavLink to="/crew" className="linknav"><span className={`${isMobile || isTablet ? "hidden" : ""} font-bold mr-2`}>02</span> CREW</NavLink>
      <NavLink to="/tecnology" className="linknav"><span className={`${isMobile || isTablet ? "hidden" : ""} font-bold mr-2`}>03</span> TECNOLOGY</NavLink>
    </>
  )
}

export default NavLinks