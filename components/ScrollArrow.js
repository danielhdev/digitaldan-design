import { motion } from 'framer-motion'
import { BsFileArrowDown } from 'react-icons/bs'

const ScrollArrow = () => {
    const arrowAnimate = {
        y: [0, 5, 0, -5, 0],
        transition: {
            duration: 2,
            repeat: Infinity

        }
    }
    return (
        <section className="relative">
            <motion.div className="absolute md:right-1/2"
                animate={arrowAnimate}
            >
                <span className='text-2xl'>
                    <BsFileArrowDown /></span>

            </motion.div></section>
    )
}

export default ScrollArrow