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
import { useState } from "react";


const Section2Component = () => {

    const [imageclick , setImageclick] = useState('')

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
        paddingr:'pr-[50%] lg:pr-[20%]'
    },
    {   image_mobile: grid_mobile,
        image_desktop:grid_desktop,
        title:'The grid',
        paddingr:'pr-[65%]'
    },
    {   image_mobile: above_mobile,
        image_desktop:above_desktop,
        title:'From up above VR',
        paddingr:'pr-[50%] lg:pr-[20%]'
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
    }]

    const SelectImage =(event)=>{
        setImageclick(event.target.id)
    }

  return (
        <section    className="py-[8rem] lg:py-[9rem]" >
            <div className="flex flex-col lg:relative ">
                <h1 className="font-Josefin text-[2rem] text-center font-medium uppercase leading-[2rem] mb-[3rem] 
                            lg:text-[3rem] lg:text-start lg:leading-[3rem] lg:mb-[4rem]" id="creation">
                    Our creations
                </h1>
                
                <div className="flex flex-wrap gap-x-0 gap-y-[1rem] w-full
                                lg:gap-x-[2rem] lg:gap-y-[2rem] ">
                    {card.map((e,index)=>{
                        return  <section key={index} className=" relative w-full lg:w-auto" >
                                    <div className=" relative">
                                        <img src={e.image_desktop} alt={e.image_desktop} className={imageclick == e.title   ?'hidden  lg:block opacity-[0.4]'
                                                                                                                            :'hidden  lg:block'}/>
                                        <img src={e.image_mobile} alt={e.image_mobile} className={imageclick == e.title     ?'block w-full opacity-[0.4]   lg:hidden'
                                                                                                                            :'block w-full   lg:hidden'} />
                                        <div className={imageclick == e.title   ?'hidden '
                                                                                :'absolute top-0 left-0 h-full w-[60%]  bg-gradient-to-r from-[#000000c5] to-transparent'}>
                                        </div>
                                    </div>                                    
                                    <h1 className={`${imageclick == e.title ?` text-black title-section2  ${e.paddingr}`       :`text-white title-section2 ${e.paddingr}`}`}>{e.title}
                                    </h1>
                                    <div className={`  absolute top-0 left-0 h-full w-full hover:cursor-pointer`} id={`${e.title}`} onClick={SelectImage}></div>
                                </section>
                    })}
                </div>
                <div className="flex justify-center lg:absolute lg:top-0 lg:right-0 lg:block lg:justify-normal">
                    <button className=" font-Alata uppercase tracking-[0.4rem] mt-[2rem] border border-black px-[2.5rem] py-[0.6rem] 
                                        lg:mt-0
                                        hover:bg-black hover:text-white">
                        See all
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Section2Component
