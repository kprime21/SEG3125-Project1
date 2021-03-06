import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css';
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const pics = ['amico.svg', 'bro.svg', 'cuate.svg', 'pana.svg','rafiki.svg'];

const ContainerFluid = styled.div`
  position:relative;
  padding-bottom: 3rem;
  margin-bottom:5rem;
  
`;

const ImageHolder = styled.div`
position: relative;
  .image {
    
    
  } 
`;

const CarouselHolder = styled.div`
position:relative;
width:100%;
`;

const HeroImagePicture = styled.div`
position:relative;
width: 100%;
margin:auto;
@media only screen and (max-width: 992px) {
  width:65%;
}

>span {
    position: unset !important;
}

.image {
    
    object-fit: contain;
    position: relative !important;
    height: unset !important;
}


`;

export default function Hero() {
  
  return (
    <>
    <ContainerFluid className="container-fluid">
    <div className="row g-2 mb-5 shadow-lg rounded">
    <div className="col-lg-4">
      <HeroImagePicture>
        <Image src={`/dog.svg`} className="d-block w-100 image" alt="..." layout="fill"/>
      </HeroImagePicture>
      </div>  
      <div className="col  align-self-center mb-5" align="center">
        <span className={`fw-normal text-white text-center fs-2 ${styles.fontHeader}`}>Get your <span className={`fw-bold fs-3 ${styles.highlightColour2}`}>pet</span> the best help at <span className={`fw-bold fs-1 ${styles.highlightColour1}`}> Magnolia</span></span>
        <br></br>
        <br></br>
        <br></br>
        <span className={`fw-normal text-white text-center fs-3 ${styles.fontHeader}`}>Only the best Vetenarian services for your pets</span>
        <br></br>
        <br></br>
        <br></br>
        <span className={`fw-normal text-white text-center fs-3 ${styles.fontHeader}`}>Provided by the most experienced and gentle experts</span>
        <br></br>
        <br></br>
        <br></br>
        
        
        <span className={`fw-normal text-white text-center fs-1 ${styles.fontHeader}`}>Book your appointment  <span></span>
        
          <Link href="/booking">
          <motion.button
           whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            type="button" className={`btn btn-lg fs-1 ${styles.buttonColour} rounded-pill shadow-lg`}
            >
            Right Now! 
           </motion.button>
          </Link>
          </span>
          
          
        
      </div>
    </div>

    {/* SECOND */}
    <div className="row mt-5"> 
    <div className="col-xl-7">
    <CarouselHolder id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <ImageHolder>
        <Image src={`/${pics[0]}`} className="d-block w-100 image" alt="..." width="1920" height="1080"/>
      </ImageHolder>
    </div>
    
    {
      pics.slice(1).map(items => {
        return(
          <div key ={items} className="carousel-item">
            <ImageHolder>
              <Image src={`/${items}`} className="d-block w-100 image" alt="..." width="1920" height="1080"/>
            </ImageHolder>
          </div>
        )
      })
    }
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</CarouselHolder>
{/* end of carousel*/}
</div>
<div className="col align-self-center" align='center'> 
<div className="col align-self-center pb-5 w-50 " align='center'> 
<div className={`card ${styles.backgroundColour} shadow-lg  rounded text-light`}> 
  <div className={`card-body`}>
    
    <p className="card-text fs-2" align='center'> To learn more about our services <br></br><Link href="/services"><motion.a whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }} className={`btn btn-sm fs-4 ${styles.buttonColour} rounded-pill shadow-lg`} align='center'> Click here</motion.a></Link></p>
    
    
    
  </div>
</div>

</div>
<div className="col align-self-center w-50 " align='center'> 
<div className={`card ${styles.backgroundColour} shadow-lg rounded text-light `}> 
  <div className={`card-body`}>
    
    <p className="card-text fs-2" align='center'> To learn more about our experts <br></br><Link href="/experts"><motion.a whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }} href="" className={`btn btn-sm fs-4 ${styles.buttonColour} rounded-pill shadow-lg`} align='center'> Click here</motion.a></Link></p>
    
    
    
  </div>
</div>

</div>
</div>
</div>

{/* end of row 2*/}


{/* THIRD */}

{/* <div className="row mt-5 ">
  <div className="col" align="center">
    <div className={`card w-50 justify-content-between ${styles.backgroundColour}  text-light`}>
      <div className="card-body ">
        <h5 className="card-title">Already have an appointment booked?</h5>
        <p className="card-text">Enter your phone number here to see details! </p>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Phone Number" aria-label="Recipient's username" aria-describedby="button-addon2" style={{textAlign:'center'}}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
      </div>
    </div>
  </div>
  <div className="col" align="center">
    <div className={`card w-75 justify-content-between ${styles.backgroundColour}  text-light`}>
      <div className="card-body">
        <h5 className="card-title">Experts</h5>
        <p className="card-text">We offer an array of experts</p>
        <a href="#" className="btn btn-primary">View</a>
      </div>
    </div>
  </div> 
</div> */}
</ContainerFluid>
      
    </>
  );
}
