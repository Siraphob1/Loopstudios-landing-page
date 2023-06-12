import deep_mobile from "../images/mobile/image-deep-earth.jpg";
import deep_desktop from "../images/desktop/image-deep-earth.jpg";
import night_mobile from "../images/mobile/image-night-arcade.jpg";
import night_desktop from "../images/desktop/image-night-arcade.jpg";
import soccer_mobile from "../images/mobile/image-soccer-team.jpg";
import soccer_dektop from "../images/desktop/image-soccer-team.jpg";
import grid_mobile from "../images/mobile/image-grid.jpg";
import grid_desktop from "../images/desktop/image-grid.jpg";
import above_mobile from "../images/mobile/image-from-above.jpg";
import above_desktop from "../images/desktop/image-from-above.jpg";
import borealis_mobile from "../images/mobile/image-pocket-borealis.jpg";
import borealis_desktop from "../images/desktop/image-pocket-borealis.jpg";
import curiosity_mobile from "../images/mobile/image-curiosity.jpg";
import curiosity_desktop from "../images/desktop/image-curiosity.jpg";
import fisheye_mobile from "../images/mobile/image-fisheye.jpg";
import fisheye_desktop from "../images/desktop/image-fisheye.jpg";


const Section2Component = () => {

    const card = [{
        image_mobile: deep_mobile,
        image_desktop: deep_desktop,
        title:'Deep earth',
        paddingr:'pr-[65%]'
    },
    {   image_mobile: night_mobile,
        image_desktop: night_desktop,
        title:'Night arcade',
        paddingr:'pr-[50%]'
    },
    {   image_mobile: soccer_mobile,
        image_desktop:soccer_dektop,
        title:'Soccer team VR',
        paddingr:'pr-[50%]'
    },
    {   image_mobile: grid_mobile,
        image_desktop:grid_desktop,
        title:'The grid',
        paddingr:'pr-[65%]'
    },
    {   image_mobile: above_mobile,
        image_desktop:above_desktop,
        title:'From up above VR',
        paddingr:'pr-[50%]'
    },
    {   image_mobile: borealis_mobile,
        image_desktop:borealis_desktop,
        title:'Pocket borealis',
        paddingr:'pr-[50%]'
    },
    {   image_mobile: curiosity_mobile,
        image_desktop:curiosity_desktop,
        title:'The curiosity',
        paddingr:'pr-[50%]'
    },
    {   image_mobile: fisheye_mobile,
        image_desktop:fisheye_desktop,
        title:'Make it fisheye',
        paddingr:'pr-[50%]'
    }
    
    ]
  return (
        <section    className="py-[8rem] lg:py-[9rem]">
            <div className="flex flex-col lg:relative ">
                <h1 className="font-Josefin text-[2rem] text-center font-medium uppercase leading-[2rem] mb-[3rem] 
                            lg:text-[3rem] lg:text-start lg:leading-[3rem] lg:mb-[4rem]">
                    Our creations
                </h1>
                
                <div className="flex flex-wrap gap-x-0 gap-y-[1rem] w-full
                                lg:gap-x-[2rem] lg:gap-y-[2rem] ">
                    {card.map((e,index)=>{
                        return <span key={index} className=" relative w-full lg:w-auto" >
                                    <div className=" relative">
                                        <img src={e.image_desktop} alt="" className="hidden  lg:block" />
                                        <img src={e.image_mobile} alt="" className=" block w-full  lg:hidden" />
                                        <div className=" absolute top-0 left-0 h-full w-[60%]  bg-gradient-to-r from-[#000000c5] to-transparent"></div>
                                    </div>                                    
                                    <h1 className={`uppercase absolute bottom-[1rem] left-[1rem] text-white text-[1.5rem] font-Josefin  ${e.paddingr} leading-[1.5rem]
                                                    lg:bottom-[2rem] lg:left-[2rem] lg:text-[2.1rem] lg:leading-[2.1rem]`}>{e.title}
                                    </h1>
                                </span>
                    })}
                </div>
                <div className="flex justify-center lg:absolute lg:top-0 lg:right-0 lg:block lg:justify-normal">
                    <button className=" font-Alata uppercase tracking-[0.4rem] mt-[2rem] border border-black px-[2.5rem] py-[0.6rem] 
                                        lg:mt-0
                                        hover:bg-black hover:text-white
                                        active:bg-black active:text-white">
                        See all
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Section2Component
