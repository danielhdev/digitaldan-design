import { Parallax } from 'react-scroll-parallax'

const ParallaxSection = ({ children }) => {
    return (
        <section
            className="h-[5rem] dark:bg-[#09090b] overflow-hidden
    bg-[#fdfdfd] dark:text-[#fdfdfd] text-[#09090b] 
        
        grid place-content-start relative px-[1rem] lg:px-[2rem]"
        ><Parallax speed={-5} className="header z-20">
                {children}
            </Parallax>
        </section>
    )
}

export default ParallaxSection