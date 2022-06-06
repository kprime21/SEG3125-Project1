import styled from "styled-components";
import Link from "next/link";
import styles from './Extra.module.css'
const Foot = styled.div`
  
  
  
  overflow: auto;
`;

const Footer = () => {
  return (<Foot className="w-100 py-4 flex-shrink-0">
     
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-3">Contact</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Tel.: 613-562-5700</a></li>
                        <li><a href="#">Toll-free: 1-877-868-8292</a></li>
                        <li><a href="#">Fax: 613-562-5323</a></li>
                        <li><a href="#">uOttawainfo@uOttawa.ca</a></li>
                        <li>550 Cumberland Street, <br></br>Ottawa ON K1N 6N5 Canada</li>
                      
                    </ul>
              

              
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-3">Hours Open</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Monday - 5:00 - 17:00</a></li>
                        <li><a href="#">Tuesday - 5:00 - 17:00</a></li>
                        <li><a href="#">Wednesday - 5:00 - 17:00</a></li>
                        <li><a href="#">Thursday - 5:00 - 17:00</a></li>
                        <li><a href="#">Friday - 5:00 - 17:00</a></li>
                        <li><a href="#">Saturday - 10:00 - 16:00</a></li>
                        <li><a href="#">Saturday - 10:00 - 16:00</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Site Map</h5>
                    <ul className="list-unstyled text-muted">
                    <li className="nav-item">
          <Link href="/">
            <a className={`nav-link ${styles.mainColour}`}>Home</a>
            </Link>
          </li>
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
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Magnolia Veterinarian Services</h5>
                    
                    {/* <p className="small text-muted">Sign up for our newsletter!</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form> */}
                    <a className="small text-muted" href="https://storyset.com/">illustrations by Storyset</a>
                    <br></br>
                    <a className="small text-muted" href="https://github.com/kprime21">Github</a>
                </div>
            </div>
        </div>
  </Foot>);
};

export default Footer;
