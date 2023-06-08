import '@styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from "@components/Navbar"
import Lenis from '@studio-freight/lenis'
import { ParallaxProvider } from 'react-scroll-parallax'
import Menu from '@components/Menu'


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
        <meta name="keywords" content="UI Web designer
UI designer

Portfolio
Design projects
User interface
User experience
Web design
Mobile app design
Visual storytelling
Typography
Responsive design
Interaction design
User-centered design
"
        />
        <meta name="description" content="Welcome to the portfolio of Daniel Hubschmann, UI, Visual and Web designer. Explore a collection of innovative designs, user-centric interfaces, and visually stunning projects." />

        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta property="og:title" content="digital.dan UI, Visual and Web Design" />
        <meta property="og:description" content="Welcome to the portfolio of Daniel Hubschmann, a UI Visual and Web designer. 
        Explore a collection of innovative designs, user-centric interfaces, and visually stunning projects."/>
        <meta property="og:url" content="https://digitaldan.agency/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI Visual and Web Designer Portfolio - Daniel Hubschmann digital.dan" />
        <meta name="twitter:description" content="Welcome to the portfolio of Daniel Hubschmann digital.dan, a UI, Visual and Web designer. Explore a collection of innovative designs, user-centric interfaces, and visually stunning projects." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Art Direction/UI/Visual/Web Design - digital.dan</title>
      </Head>


      <Navbar />
      <Menu />
      <AnimatePresence mode='wait'
        onExitComplete={() => window.scrollTo(0, 0)}>

        <ParallaxProvider>
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
        </ParallaxProvider>
      </AnimatePresence>
    </>
  )
}

export default Application
