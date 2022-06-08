import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Head from 'next/head'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Magnolia Petcare</title>
        <meta
          property="og:title"
          content="Magnolia Petcare"
        />
        <meta name="description" content="We will take care of your pet" />
        <meta property="og:image" content={"/preview.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Hero>
      
      </Hero>
      </motion.div>
      

    </div>
  )
}
