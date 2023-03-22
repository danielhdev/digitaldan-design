
import Link from 'next/link'
import { motion } from 'framer-motion'

const About = () => {
    const paragraphAnimate = {
        opacity: [0, 1],
        y: [5, 0],
        transition: { delay: 0.2, duration: 0.6 }
    }
    const titleAnimate = {
        opacity: [0, 1],
        x: [-5, 0],
        transition: { delay: 0.4, duration: 1 }
    }
    return (
        <>
            <main>
                <section className="h-screen flex justify-center items-center">


                    <div className="w-[95vw] lg:w-[70vw]">
                        <motion.h1 animate={titleAnimate} className="header">About</motion.h1>
                        <motion.div animate={paragraphAnimate} className="border-[0.15rem] border-l-0 border-b-0 border-amber-600 w-fit">
                            <p className="paragraph lg:w-[60ch] text-[var(--stone)] font-bold
                            pt-4 pr-6 
                            md:pt-8 md:pr-12 
                            
                            ">
                                Daniel Hubschmann from Germany. Senior digital designer that has changed to creative development in the recent years.
                                <br />
                                <br />
                                My background makes me your designer/ developer hybrid and freelance partner for agencies and start ups worldwide.
                                <br />
                                <br />
                                My tools range from Figma and Adobe products to CSS, JavaScript and backend tech like Firebase. I am making use of AI for my work.
                                <br />
                                <br />
                                My current daily rate is 500 Euros.
                                If you are looking for a reliable freelancer and/ or sub contractor, please contact me{' '}

                                <Link href="/Contact">
                                    <span className="text-amber-600 font-extrabold cursor-pointer underline">
                                        HERE  </span></Link>
                                and let&apos;s talk about your project!
                                <br />
                                <br />
                            </p>
                        </motion.div>
                    </div>
                </section>

            </main >
        </>
    )
}

export default About 