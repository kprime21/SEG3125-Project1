import styled from "styled-components";
import styles from './Extra.module.css'
import {useState, useEffect} from 'react'
import Image from "next/image";

const ExpertsHolder = styled.div`

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


const Examples = [{name:'John', text:'medical help'}, {name:'Joe', text:'teeth cleaning'}, {name:'Bartholomew', text:'prevent rabies'}
, {name:'Dingle', text:'disease prevention'}, {name:'Dale', text:'healing through lasers'}, 
{name:'Melly', text:'scans'}, {name:'Carti', text:'surgery'}, 
{name:'Symere', text:'clean the pet'}, {name:'Winthrop', text:'urgent care'}, 
{name:'Melon', text:'I dunno'}, {name:'Jah', text:'ok'},
{name:'Dior', text:'Dior'}, 
]


export default function Experts() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const ServiceExamples = Examples.filter(item => {
    return(
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const setExpert = ({item}) => {
    sessionStorage.setItem('expert', item.name)
  }
    return(
        <>
        <ExpertsHolder className="mx-5">
        
        
        <div className="input-group mb-3 mx-auto justify-content-center">
            <input type="text" onChange={handleSearchInput} className="form-control-lg text-center w-100" placeholder="Expert's Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
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
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">Read More</a>
                </div>
              </div> 
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => setExpert({item})}>Select this specialist</button>
      </div>
    </div>
  </div>
</div>
            </div>
           )
         })}
         </div>
        </ExpertsHolder>
        </>
    )
}