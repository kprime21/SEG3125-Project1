import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";



const StyledNavbar = styled.nav`


`;

const Navbar = () => {
  const router = useRouter()
  return (
    <StyledNavbar className ="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand fs-1 text-light" href="#">
        <img src="/dogicon.svg" alt="" height="96" width="96" className="d-inline-block align-text-center mb-3"/> <span>Vetenarian Services</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a className="nav-link">Services</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/experts">
              <a className="nav-link">Experts</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/bookings">
              <a className="nav-link">Book Appointment</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </StyledNavbar>
  )
};

export default Navbar;
