import styled from "styled-components";
import styles from './Extra.module.css'
import {useState, useEffect} from 'react'
import Image from "next/image";


const ServiceHolder = styled.div`

`;

const ImageHolder = styled.div`
position: relative;
>span {
    position: unset !important;
}
  .image {
    object-fit: contain;
    position: relative !important;
    height: unset !important;
    
  } 
`;


const Examples = [{name:'Medical', text:'medical help'}, {name:'Dental', text:'teeth cleaning'}, {name:'Vaccinations', text:'prevent rabies'}
, {name:'Preventive care', text:'disease prevention'}, {name:'Laser Therapy', text:'healing through lasers'}, 
{name:'Radiology', text:'scans'}, {name:'Surgical', text:'surgery'}, 
{name:'Grooming', text:'clean the pet'}, {name:'Emergency care', text:'urgent care'},
{name:'Weight Management', text:'help lose weight to keep healthy'}, {name:'End of Life', text:'we want to make sure your pet is happy'},
{name:'Physical Rebilitation', text:'Training'}
]


export default function Services() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const ServiceExamples = Examples.filter(item => {
    return(
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const setService = ({item}) => {
    localStorage.setItem('service', item.name)
  }

  
  
    return(
        <>
        <ServiceHolder className="mx-5">
        
        
          <div className="input-group mb-3 mx-auto justify-content-center">
            <input type="text" onChange={handleSearchInput} className="form-control-lg text-center w-100" placeholder="Service Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
         {ServiceExamples.map(item=> {
           return(
            <div key ={item.name} className="col">
              <div  className={`card ${styles.backgroundColour} shadow-lg rounded text-light`}>
              
                <ImageHolder>
                <Image src="/vercel.svg" className="card-img-top image" alt="..." layout="fill"/>
                </ImageHolder>
                
                <div className="card-body " align='center'>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href="#" data-bs-toggle="modal" data-bs-target={`#${item.name}`} className="btn btn-primary">Read More</a>
                </div>
                
              </div> 
              <div className="modal fade" id={`${item.name}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-xl modal-dialog-centered `}>
                  <div className={`modal-content ${styles.backgroundColour}`} >
                  <div className={`modal-header ${styles.backgroundColour}`} >
                      <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <a className="navbar-brand" href="#">
                        <img src="/vercel.svg" alt="" /> Vetenarian Services
                      </a>
                      <div></div>
                      <a className="navbar-brand" href="#">
                        <img src="/vercel.svg" alt="" /> Vetenarian Services
                      </a>
                    </div>
                    <div className={`modal-footer ${styles.backgroundColour}`} >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={() => setService({item})}>Select this service</button>
                    </div>
                  </div>
                </div>
          </div>
            </div>
           )
         })}
         </div>
         
        </ServiceHolder>
        </>
    )
}