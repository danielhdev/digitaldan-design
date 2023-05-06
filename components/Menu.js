import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaGripLines } from 'react-icons/fa'
import { GiTireIronCross } from 'react-icons/gi'

const variants = {
    hidden: {
        y: '-200vh',
        transition: { duration: 0.4 },
    },
    visible: {
        y: 0,
        transition: { duration: 0.5 },
        ease: "easeIn"
    },
};

const menu = [
    { title: 'work', path: '/#Work' },
    { title: 'services', path: '/#About' },
    { title: 'contact', path: '/#Contact' }
]
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            < div className="w-fit text-center fixed mt-[0.2rem] right-[1rem] md:right-[3rem] z-40
            text-zinc-50 mix-blend-difference">
                <button
                    className="hover:text-amber-200 focus:outline-none header"
                    onClick={toggleModal}>
                    {!isOpen ? <FaGripLines /> : <GiTireIronCross />}
                </button>
            </div>
            <div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-lime-200 flex justify-center items-center z-20"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={toggleModal}
                        >
                            <ul className="w-full flex flex-col justify-start items-start space-y-[4vw] p-[3rem]">
                                {menu.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.path}>
                                            <a className="heroheader text-zinc-800 hover:text-amber-500"
                                                onClick={toggleModal}>{item.title}
                                            </a>
                                        </Link>
                                    )
                                }
                                )}
                            </ul>
                        </motion.div>)}
                </AnimatePresence>

            </div>
        </>
    )
}

export default Menu