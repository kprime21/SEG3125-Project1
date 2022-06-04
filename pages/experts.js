import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Experts from '../components/Experts'

export default function Home() {
  return (
    <div className={styles.container}>
      <Experts></Experts>
      

    </div>
  )
}
