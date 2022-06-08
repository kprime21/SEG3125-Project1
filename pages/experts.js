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
        <meta name="description" content="Meet our team" />
        <link rel="icon" href="/favicon.ico" />
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
