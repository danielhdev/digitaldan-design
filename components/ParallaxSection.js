import { Parallax } from 'react-scroll-parallax'

const ParallaxSection = ({ children }) => {
    return (
        <section
            className="h-[20vh] md:h-[50vh] bg-[#09090b] overflow-hidden
        dark:bg-[#fdfdfd] grid place-content-center relative"
        ><Parallax speed={-5} className="heroheader z-20">
                {children}
            </Parallax>
            <Parallax speed={10} className="absolute h-[10vh] md:h-[25vh] inset-0 top-1/3 bg-[#fdfdfd] dark:bg-[#09090b] 
                outline-4 outline-amber-500"></Parallax>

        </section>
    )
}

export default ParallaxSection