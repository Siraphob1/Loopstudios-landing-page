import hero_desktop from "../images/desktop/image-hero.jpg";
import hero_mobile from "../images/mobile/image-hero.jpg";
import logo from "../images/logo.svg";
import ihambergur from "../images/icon-hamburger.svg";
import MenuComponent from "./MenuComponent";
import { useState } from "react";


const HeaderComponent = () => {
    const [menuclick,setMenuclick] = useState(false)

    const ClickMenu =()=>{
        const currentclick = !menuclick;
        setMenuclick(currentclick);
    }

  return (
    <header className="w-full text-white">
        <div className={menuclick   ?" hidden "  :"w-full relative"}>
            <img src={hero_desktop} alt="hero_desktop" className=" hidden lg:block w-full brightness-[0.6]"/>
            <img src={hero_mobile} alt="hero_mobile" className="w-full brightness-[1] lg:brightness-[0.6] lg:hidden" />
            <div className=" absolute top-0 w-full p-[2rem] lg:px-[10rem] lg:pt-[4rem]">
                <section className="flex  justify-between w-full ">
                    <div>
                        <img src={logo} alt="logo" className="" />
                    </div>
                    <ul className="hidden lg:flex">
                        <li className="nav-link"><a href="#">About</a></li>
                        <li className="nav-link"><a href="#">Careers</a></li>
                        <li className="nav-link"><a href="#">Events</a></li>
                        <li className="nav-link"><a href="#">Products</a></li>
                        <li className="nav-link"><a href="#">Support</a></li>
                    </ul>
                    <div className="flex items-center lg:hidden" onClick={ClickMenu}>
                        <img src={ihambergur} alt="ihambergur"  className="hover:cursor-pointer" />
                    </div>
                </section>                              
            </div>
            <div className=" lg:block absolute top-1/2 -translate-y-1/3 px-[1.5rem] lg:px-[10rem] ">
                <div className="border-white border-[3px] text-[2.5rem]  font-Josefin font-light  uppercase leading-[2.5rem] max-w-[650px] p-[1.5rem]
                                lg:text-[4rem]  lg:tracking-[0.25rem] lg:leading-[4.1rem]  lg:p-[2.5rem] ">
                    Immersive experiences that deliver
                </div>
            </div>  
        </div>
        <div className={menuclick ?"block" :"hidden"}>
            <MenuComponent PClickMenu={ClickMenu}/>
        </div>
    </header>
  )
}

export default HeaderComponent
