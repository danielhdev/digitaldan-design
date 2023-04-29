import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GiTireIronCross } from 'react-icons/gi'



const variants = {
    hidden: {
        x: '200vw',
        transition: { duration: 0.7 },
    },
    visible: {
        x: 0,
        transition: { duration: 0.7 },
        ease: "ease-in"
    },
};

const menu = [
    { title: 'Work', path: '/#Work' },
    { title: 'Service', path: '/#About' },
    { title: 'Contact', path: '/#Contact' }
]
const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            < div className="w-fit text-center fixed mt-[0.2rem] right-[2rem] md:right-[4rem] z-40">
                <button
                    className="hover:text-amber-200 focus:outline-none header"
                    onClick={toggleModal}
                >
                    {!isOpen ? <RxHamburgerMenu /> : <GiTireIronCross />}
                </button></div>
            <div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 left-0 w-full h-full bg-lime-200 flex justify-center items-center z-10"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
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