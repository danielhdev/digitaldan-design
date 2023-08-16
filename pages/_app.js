import '@styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from "@components/Navbar"
import { ParallaxProvider } from 'react-scroll-parallax'
import Menu from '@components/Menu'


function Application({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Fullstack Web Developer
Full Stack Development
Web Developer
Web Development
Portfolio
User interface
User experience
Web design
Mobile app development
Responsive design
User-centered design
PHP
JavaScript
React
MySQL
MySQL database
Frontend Development
API Development
Backend Development
"
        />
        <meta name="description" content="Welcome to the portfolio of Daniel Hubschmann, full stack developer using JavaScript, PHP and SQL." />

        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta property="og:title" content="digital.dan Full Stack Web Development" />
        <meta property="og:description" content="Welcome to the portfolio of Daniel Hubschmann, Full stack Developer using JavaScript, PHP and SQL." />
        <meta property="og:url" content="https://digitaldan.agency/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fullstack Web Developer Portfolio - Daniel Hubschmann digital.dan" />
        <meta name="twitter:description" content="Welcome to the portfolio of Daniel Hubschmann digital.dan, a Full Stack Web developer using JavaScript, PHP and SQL." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Full Stack Development - digital.dan</title>
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
