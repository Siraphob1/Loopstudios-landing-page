import hero_desktop from "../images/desktop/image-hero.jpg";
import hero_mobile from "../images/mobile/image-hero.jpg";
import logo from "../images/logo.svg";


const HeaderComponent = () => {
  return (
    <header className="w-full text-white">
        <div className="w-full relative">
            <img src={hero_desktop} alt="hero_desktop" className=" hidden lg:block w-full brightness-[0.6]"/>
            <img src={hero_mobile} alt="hero_mobile" className="w-full lg:hidden" />
            <div className=" absolute top-0 lg:w-full lg:px-[10rem] lg:pt-[4rem]">
                <section className="flex lg:flex-row lg:justify-between lg:w-full ">
                    <div>
                        <img src={logo} alt="logo" className="" />
                    </div>
                    <ul className="flex">
                        <li className="nav-link"><a href="#">About</a></li>
                        <li className="nav-link"><a href="#">Careers</a></li>
                        <li className="nav-link"><a href="#">Events</a></li>
                        <li className="nav-link"><a href="#">Products</a></li>
                        <li className="nav-link"><a href="#">Support</a></li>
                    </ul>
                </section>                              
            </div>
            <div className=" absolute top-1/2 -translate-y-1/3 lg:px-[10rem] ">
                <div className="border-white border-[3px] text-[4rem] font-Josefin font-light  uppercase leading-[4rem] max-w-[550px] px-[2rem] py-[2rem] ">
                    Immersive experiences that deliver
                </div>
            </div>  
        </div>
    </header>
  )
}

export default HeaderComponent
