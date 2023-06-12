import Section1Component from "./Section1Component"
import Section2Component from "./Section2Component"




const MainComponent = () => {
  return (
    <main className="px-[1.5rem] py-[6rem]
                    lg:px-[10rem] lg:py-[10rem]">
        <Section1Component/>
        <Section2Component/>
    </main>
  )
}

export default MainComponent
