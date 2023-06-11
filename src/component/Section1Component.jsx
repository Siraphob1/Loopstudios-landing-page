import interactive_mobile from "../images/mobile/image-interactive.jpg";
import interactive_desktop from "../images/desktop/image-interactive.jpg";


const Section1Component = () => {
  return (
    <section className=" relative ">
        <img src={interactive_desktop} alt="" className=" hidden lg:block "/>
        <img src={interactive_mobile} alt="" className=" w-full lg:hidden" />

        <div className=" static top-0 left-0 bg-white    pt-[2rem] px-[1rem]  text-center
                        lg:absolute lg:top-[40%] lg:bottom-0 lg:left-[50%]   lg:w-[600px]  lg:text-start lg:px-[4.8rem] lg:pt-[4.8rem]">
          <h1 className=" font-Josefin text-[2rem] font-medium uppercase leading-[2rem] mt-[1rem]
                          lg:text-[3rem] lg:leading-[3rem]">The leader in interactive VR</h1>
          <p className="text-[15px] text-[#8c8c8c] font-medium mt-[1rem]">Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
          </p>
        </div>
    </section>
  )
}

export default Section1Component
