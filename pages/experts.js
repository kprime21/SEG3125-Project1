import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Experts from '../components/Experts'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Magnolia Petcare: Experts</title>
        <meta property="og:image" content={"/preview.png"} />
        <meta name="description" content="Meet our team" />
        
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Experts></Experts>
      </motion.div>
      

    </div>
  )
}
