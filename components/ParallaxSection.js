import { Parallax } from 'react-scroll-parallax'

const ParallaxSection = ({ children }) => {
    return (
        <section
            className="h-[20vh] bg-[#09090b] overflow-hidden
        dark:bg-[#fdfdfd] text-[#fdfdfd] dark:text-[#09090b] 
        
        grid place-content-center relative"
        ><Parallax speed={-5} className="heroheader z-20">
                {children}
            </Parallax>
        </section>
    )
}

export default ParallaxSection