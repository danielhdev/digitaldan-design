import { motion } from 'framer-motion'

const Services = () => {
    const stagger = {
        opacity: [0, 1],
        transition: {
            staggerChildren: 0.5
        }

    }
    return (
        <>

            <main id="About" className='h-auto py-[5rem]'>
                <section className="flex justify-start px-4">
                    <motion.ul whileInView={stagger} className="herolinks list-disc p-[5vh] md:p-[10vh] md:w-[75vw]">
                        <li>Developing your design on point</li>
                        <li>Developing the digital part of brand and marketing projects</li>
                        <li>UI animations and interactions</li>
                        <li>Optimizing architectures, performance and loading speeds</li>
                    </motion.ul></section>
                <section className="flex md:justify-end px-4">
                    <ul className="herolinks list-disc p-[5vh] md:p-[10vh]
                      text-zinc-800 bg-zinc-200 md:w-[75vw] mb-[4rem]">

                        <li>Development with JavaScript and <br />
                            JavaScript libraries like React</li>
                        <li>User Consent Management</li>
                        <li>Creating Headless CMS (Strapi and others)</li>
                        <li>E-commerce development <br /></li>
                        <br />
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Services