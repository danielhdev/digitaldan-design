import { motion } from 'framer-motion'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FeedbackForm() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);



  return (
    <section className="flex flex-col justify-center items-center">
      <main className=" pt-8 pr-10 w-fit border-t-[2px] border-r-[2px] border-amber-300
    text-black">
        <ul className="text-center  ">
          <a
            href="mailto:d.huebschmann@tutanota.com"
            method="get"
            encType="text/plain"
          >
            <motion.li
              className="contactli1 p-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              email
            </motion.li>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-huebschmann-175b66236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.li
              className="contactli2 p-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}

              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              linkedin
            </motion.li>
          </a>
          <a
            href="https://twitter.com/digitaldan_de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.li
              className="contactli3 p-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              twitter
            </motion.li></a>
        </ul>
      </main>
      <section className="text-center text-amber-300 
      
      ml-[50vw]
      md:ml-[30vw]
      
    
      sm:text-[3vw]
      md:text-[1.5vw]
      lg:text-[1vw]
      
      
      ">
        design & code &copy; {date} <br />Daniel Hubschmann<br />
        <Link href="/Imprint">
          <span className="cursor-pointer">
            imprint</span>
        </Link>
      </section>
    </section>
  )
}
