import styled from "styled-components";
import styles from './Extra.module.css'
import {useState, useEffect} from 'react'
import Image from "next/image";
import { useRouter } from "next/router";

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


const Examples = [{name:'John', text:'medical help', id:1}, {name:'Joe', text:'teeth cleaning' , id:2}, {name:'Bartholomew', text:'prevent rabies', id:3}
, {name:'Dingle', text:'disease prevention', id:4}, {name:'Dale', text:'healing through lasers', id:5}, 
{name:'Melly', text:'scans', id:6}, {name:'Carti', text:'surgery', id:7}, 
{name:'Symere', text:'clean the pet', id:8}, {name:'Winthrop', text:'urgent care', id:9}, 
{name:'Melon', text:'I dunno', id:10}, {name:'Jah', text:'ok',id:11},
{name:'Dior', text:'Dior', id:12}, 
]


export default function Experts() {
  let router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const ServiceExamples = Examples.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const setExpert = ({ item }) => {
    sessionStorage.setItem("expert", JSON.stringify(item));
    router.push("/booking");
  };

  return (
    <>
      <ExpertsHolder className="mx-5">
        <div className="input-group mb-3 mx-auto justify-content-center py-5">
          <input
            type="text"
            onChange={handleSearchInput}
            className="form-control-lg text-center w-100 rounded-pill fs-2"
            placeholder="Search Expert Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 my-5 py-5">
          {ServiceExamples.map((item) => {
            return (
              <div key={item.id} className="col my-4">
                <div
                  className={`card ${styles.backgroundColour} shadow-lg rounded text-light h-100 pb-5`}
                >
                  <ImageHolder>
                    <Image
                      src={`/experts/${item.id}.svg`}
                      className="card-img-top image"
                      alt="..."
                      layout="fill"
                    />
                  </ImageHolder>

                  <div className="card-body d-flex flex-column" align="center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.text}</p>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal${item.id}`}
                      className={`btn btn-md mt-auto ${styles.buttonColour} rounded-pill shadow-lg fs-4`}
                    >
                      Read More
                    </a>
                  </div>
                </div>

                <div className="modal fade" id={`exampleModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable`}>
                  <div className={`modal-content ${styles.backgroundColour}`} style={{border:'5px solid transparent', borderRadius:'25px'}}>
                  <div className={`modal-header ${styles.backgroundColour}`} >
                      <h5 className="modal-title" id="exampleModalLabel"></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">
                    
                      <a className="navbar-brand" href="#">
                        <img src={`/experts/${item.id}.svg`} alt="" /> 
                      </a>
                      <h1 style={{color:'white'}}>{item.name}</h1>  
                      
                      <p>
                        LOREM IMPSUM LOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUM
                      </p>
                      </div>
                    </div>
                    <div className={`modal-footer ${styles.backgroundColour}`} >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                       <button type="button" className={`btn btn-md mt-auto ${styles.buttonColour}  shadow-lg`}  data-bs-dismiss="modal" onClick={() => setExpert({item})}>Select this expert</button>
                      
                    </div>
                  </div>
                </div>
          </div>
              </div>
            );
          })}
        </div>
      </ExpertsHolder>
    </>
  );
}