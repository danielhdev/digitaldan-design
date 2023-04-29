import { Parallax } from 'react-scroll-parallax'

const ParallaxSection = ({ children }) => {
    return (
        <section
            className="h-[30vh] md:h-[50vh] bg-[#09090b] text-[#fdfdfd] overflow-hidden
        dark:bg-[#fdfdfd] dark:text-[#09090b] grid place-content-center"
        ><Parallax speed={-5} className="heroheader">
                {children}
            </Parallax>
        </section>
    )
}

export default ParallaxSection