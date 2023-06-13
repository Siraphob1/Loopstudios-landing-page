import PropTypes from 'prop-types';
import logo from "../images/logo.svg";
import iclose from "../images/icon-close.svg";


const MenuComponent = (props) => {
    const {PClickMenu} = props
  return (
    <section className=" bg-black w-full min-h-screen   p-[2rem]">
        <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <img src={iclose} alt="" onClick={PClickMenu} className='hover:cursor-pointer'/> 
        </div>
        <ul className="mt-[20vh]">
                        <li className="nav-link-menu"><a href="#leader" onClick={PClickMenu}>About</a></li>
                        <li className="nav-link-menu"><a href="#leader" onClick={PClickMenu}>Careers</a></li>
                        <li className="nav-link-menu"><a href="#creation" onClick={PClickMenu}>Events</a></li>
                        <li className="nav-link-menu"><a href="#creation" onClick={PClickMenu}>Products</a></li>
                        <li className="nav-link-menu"><a href="#support" onClick={PClickMenu}>Support</a></li>
        </ul>
    </section>
  )
}

export default MenuComponent

MenuComponent.propTypes = {
    PClickMenu: PropTypes.func
  };
