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
    { title: 'about me', path: '/#About' },
    { title: 'contact', path: '/#Contact' }
]
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>


            <button
                className="hover:text-amber-200 focus:outline-none herosubtext z-50 fixed right-[1.25rem] lg:right-[2.5rem] mt-[0.15rem]
                    text-zinc-50 mix-blend-difference "
                onClick={toggleModal}>
                {!isOpen ? <FaGripLines /> : <GiTireIronCross />}
            </button>

            <div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-stone-200/95 flex justify-center items-center z-40"
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
                                            <a className="header text-zinc-800 hover:text-amber-500"
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