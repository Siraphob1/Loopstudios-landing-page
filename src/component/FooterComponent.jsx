import ifacebook from "../images/icon-facebook.svg";
import itwitter from "../images/icon-twitter.svg";
import iinstagram from "../images/icon-instagram.svg";
import ipinterest from "../images/icon-pinterest.svg";
import ilogo from "../images/logo.svg";


const FooterComponent = () => {
  return (
    <footer className="px-[1.5rem] py-[4rem] bg-black
                      lg:px-[10rem] lg:py-[4rem]">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <section className="flex flex-col items-center lg:items-start">
            <div className="mb-[2rem]">
                <img src={ilogo} alt="ilogo"/>
            </div>
            <ul className="flex flex-col lg:flex-row">
                <li className="nav-link-footer pl-0"><a href="#">About</a></li>
                <li className="nav-link-footer"><a href="#">Careers</a></li>
                <li className="nav-link-footer"><a href="#">Events</a></li>
                <li className="nav-link-footer"><a href="#">Products</a></li>
                <li className="nav-link-footer"><a href="#">Support</a></li>
            </ul>
        </section>
        <section className="flex flex-col items-center lg:items-end lg:justify-between">
            <div className="flex  my-[2rem] lg:my-0 ">
              <div className="icon-footer" ><img src={ifacebook} alt="ifacebook" /></div>
              <div className="icon-footer" ><img src={itwitter} alt="itwitter" /></div>
              <div className="icon-footer" ><img src={ipinterest} alt="ipinterest" /></div>
              <div className="icon-footer" ><img src={iinstagram} alt="iinstagram" /></div>
            </div>
            <div className="text-[#696969] font-Alata lg:bottom-0">
              © 2021 Loopstudios. All rights reserved.    
            </div>
        </section>
      </div>
    </footer>
  )
}

export default FooterComponent
