import { Parallax } from 'react-scroll-parallax'

const ParallaxSection = ({ children }) => {
    return (
        <section
            className="h-[10rem] dark:bg-[#09090b] overflow-hidden
                    bg-[#fdfdfd] dark:text-[#fdfdfd] text-[#09090b] 
                    grid place-content-start px-[1rem] lg:px-[2rem]">
            <Parallax speed={-5} className="herolinks font-bold font-[Octarine] z-20">
                {children}
            </Parallax>
        </section>
    )
}

export default ParallaxSection