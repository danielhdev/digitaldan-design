import '@styles/globals.css'
import Contacticons from '@components/Contacticons'
import Navbar from '@components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Lenis from '@studio-freight/lenis'


function Application({ Component, pageProps }) {
  const router = useRouter()
  if (typeof window !== "undefined") {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }
  return (
    <>
      <Navbar />
      <Contacticons />
      <AnimatePresence mode='wait'
        onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={router.route}
          initial="startPt"
          animate="animatePt"
          exit="exitPt"
          transition={{
            duration: 0.4,
            ease: 'easeOut'
          }}
          variants={{
            startPt: {
              opacity: 0,
              translateX: '3px',
            },
            animatePt: {
              opacity: 1,
              translateX: '0px'
            },
            exitPt: {
              opacity: 0,
              translateX: '-3px',
            }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Application
