import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaGripLines } from 'react-icons/fa'
import { GiTireIronCross } from 'react-icons/gi'

const variants = {
    hidden: {
        x: '100vh',
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.25,
            ease: "easeIn"
        }
    },
};

const menu = [
    { id: 1, title: 'work', path: '/#Work' },
    { id: 2, title: 'about', path: '/#About' },
    { id: 3, title: 'contact', path: '/#Contact' },
    { id: 4, title: 'resume', path: "https://drive.google.com/file/d/1JIKTwgwAZAFZ8fyAO0eYpzlEM95a5YWM/view?usp=drive_link" }
]
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="hover:text-amber-200 focus:outline-none 
                z-50 fixed right-[1.25rem] lg:right-[2.5rem] mt-[0.75rem]
                    text-zinc-50 mix-blend-difference"
                onClick={toggleModal}>
                {!isOpen ? <FaGripLines /> : <GiTireIronCross />}
            </button>

            <div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 right-0 w-1/2 lg:w-[20%] h-full bg-zinc-900/90 flex justify-center items-center z-40"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            onClick={toggleModal}
                        >
                            <div className="w-full flex flex-col justify-end items-end space-y-[4vw] p-[3rem] text-zinc-50
                            ">

                                {menu.map((item) => {
                                    return (
                                        <section section className='flex items-center'>
                                            <Link key={item.id} href={item.path}>
                                                <a className="herolinks hover:text-amber-200"
                                                    onClick={toggleModal}>{item.title}
                                                </a>
                                            </Link>
                                        </section>
                                    )
                                }
                                )}
                            </div>
                        </motion.div>)}
                </AnimatePresence>

            </div>

        </>
    )
}

export default Menu