import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import styles from './Extra.module.css'



const StyledNavbar = styled.nav`


`;

const ImageHolder = styled.div`
display:flex;
transition: transform .2s;

:hover{
  transform:scale(1.005);
}
span{
  margin-top:15px;
  align-self: center;
  
   
}

`;
const Navbar = () => {
  const router = useRouter()
  return (
    <StyledNavbar className ="navbar navbar-dark navbar-expand-lg">
    <div className="container-fluid">
      <Link href="/">
      <a className="navbar-brand fs-1 text-light" >
        <ImageHolder>
        <Image src="/dogicon.svg" alt="" height="96" width="96" className="d-inline-block align-text-top image"/> <span>Magnolia Petcare</span>
        </ImageHolder>
      </a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="/">
            <a className={`nav-link ${styles.mainColour}`}>Home</a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/about">
            <a className={`nav-link ${styles.mainColour}`}>About</a>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="/services">
              <a className={`nav-link ${styles.mainColour}`}>Services</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/experts">
              <a className={`nav-link ${styles.mainColour}`}>Experts</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/booking">
              <a className={`nav-link ${styles.mainColour}`}>Book Appointment</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </StyledNavbar>
  )
};

export default Navbar;
