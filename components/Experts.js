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


const Examples = [
{name:'John', text:'We try our best to restore and maintain the good health of your pets', id:1,}, 
{name:'Ally', text:'I had to study several anatomies – human doctors had to deal with only one!!!!!' , id:2}, 
{name:'Bartholomew', text:'We are not afraid of the wild animals, because they also need true care', id:3}, 
{name:'Robert', text:'Keeping animals happy and healthy is a special privilege for vets, vet techs, and their entire team', id:4}, 
{name:'Ariana', text:'We have to give the pets proper attention as they cannot express their feelings', id:5}, 
{name:'Melly', text:'We can appreciate our works when we can restore the health of our wordless clients', id:6}, 
{name:'Carti', text:'We believe that maintaining of balance of all the lives of our planet is our responsibilities', id:7}, 
{name:'Charli', text:'Protect the health of every animal, thus protect your own planet', id:8}, 
{name:'Winthrop', text:'Our target is to cure every animal of this world', id:9}, 
{name:'Megan', text:'Our goal is to help the animals living a safe and healthy life', id:10}, 
{name:'Hailey', text:'Helping animals is a photo of my soul, the coat of my will',id:11},
{name:'Billie', text:'Paws, whiskers and a dose of love', id:12}, 
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sodales, semper urna sit amet, placerat dui. Proin vel nisl ut orci semper porta et sit amet lorem. Nunc dapibus lacus id ante laoreet mollis. Vestibulum eu est nibh. Praesent at ex quis nulla maximus accumsan a vel turpis. In congue, enim vitae aliquet dignissim, felis felis tempus massa, eget consequat mauris risus et lectus. Etiam a vehicula est, at rhoncus purus. Nulla sed lacinia ligula, quis lacinia metus. 
                      </p>
                      </div>
                    </div>
                    <div className={`modal-footer ${styles.backgroundColour}`} >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                       <button type="button" className={`btn btn-md mt-auto btn-primary  shadow-lg`}  data-bs-dismiss="modal" onClick={() => setExpert({item})}>Book this expert</button>
                      
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