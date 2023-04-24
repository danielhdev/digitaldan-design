import '@styles/globals.css'
import Contacticons from '@components/Contacticons'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from "@components/Navbar"
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
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="web design, digital design, web development, digital development" />
        <meta name="description" content="Digitaldan Digital First Agency, Daniel Hubschmann, Senior Digital Designer & Web Developer. Helping out creative agencies with state of the art digital, brand and graphic design." />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Digitaldan Digital First Agency - Design & Development</title>
      </Head>
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
