import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Booking from '../components/Booking'

export default function Home() {
  return (
    <div className={styles.container}>
      <Booking></Booking>
      

    </div>
  )
}
