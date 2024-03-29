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
        <section>
            <motion.div
                animate={arrowAnimate}
            >
                <span className='text-xl m-0 p-0'>
                    <BsFileArrowDown /></span>

            </motion.div>
        </section>
    )
}

export default ScrollArrow