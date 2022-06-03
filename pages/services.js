import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className={styles.container}>
      <Services></Services>
      

    </div>
  )
}
