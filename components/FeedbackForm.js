import { motion } from 'framer-motion'

export default function FeedbackForm() {
  return (

    <main className="border-l-0 border-b-0 border-stone-50 border-[0.15rem] pt-8 pr-10 w-fit
    text-zinc-50">
      <ul>
        <a
          href="mailto:d.huebschmann@tutanota.com"
          method="get"
          encType="text/plain"
        >
          <motion.li
            className="contactli"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Email
          </motion.li>
        </a>
        <a
          href="https://www.motion.linkedin.com/in/daniel-huebschmann-175b66236/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.li
            className="contactli"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            LinkedIn
          </motion.li>
        </a>
        <a
          href="https://twitter.com/digitaldan_de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.li
            className="contactli"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Twitter
          </motion.li></a>
      </ul>
    </main>
  )
}
