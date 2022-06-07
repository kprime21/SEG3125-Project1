import styled from "styled-components";
import styles from "./Extra.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ServiceHolder = styled.div`
  position: relative;
`;

const ImageHolder = styled.div`
  position: relative;
  > span {
    position: unset !important;
  }
  .image {
    object-fit: contain;
    position: relative !important;
    height: unset !important;
  }
`;

const Examples = [
  { name: "Medical", text: "General medical help", id: 1, cost:'$100'},
  { name: "Dental", text: "Dental cleaning", id: 2, cost:'$200'},
  { name: "Vaccinations", text: "Needle shot", id: 3, cost:'$100' },
  { name: "Preventive care", text: "Disease prevention", id: 4, cost:'$200'},
  { name: "Laser Therapy", text: "Healing through lasers", id: 5, cost:'$500' },
  { name: "Radiology", text: "Scan your pet", id: 6, cost:'$500' },
  { name: "Surgical", text: "Provide surgery to your pet", id: 7, cost:'$1000' },
  { name: "Grooming", text: "Wash your pet and make him brand new", id: 8, cost:'$100' },
  { name: "Emergency care", text: "Urgent care", id: 9, cost:'Varies' },
  {
    name: "Weight Management",
    text: "Help lose weight to keep healthy",
    id: 10,
    cost:'Varies'
  },
  {
    name: "End of Life",
    text: "we want to make sure your pet is happy",
    id: 11,
    cost:'No cost'
  },
  { name: "Physical Rebilitation", text: "Train your pet to get rid of bad behaviour", id: 12, cost:'$500' },
];

export default function Services() {
  let router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const ServiceExamples = Examples.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const setService = ({ item }) => {
    sessionStorage.setItem("service", JSON.stringify(item));
    router.push("/booking");
  };

  return (
    <>
      <ServiceHolder className="mx-5">
        <div className="input-group mb-3 mx-auto justify-content-center py-5">
          <input
            type="text"
            onChange={handleSearchInput}
            className="form-control-lg text-center w-100 rounded-pill fs-2"
            placeholder="Search Service Name"
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
                      src={`/services/${item.id}.svg`}
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
                <div className={`modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered `}>
                  <div className={`modal-content ${styles.backgroundColour}`} style={{border:'5px solid transparent', borderRadius:'25px'}}>
                  <div className={`modal-header ${styles.backgroundColour}`} >
                      <h5 className="modal-title" id="exampleModalLabel"></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">

                      <a className="navbar-brand" href="#">
                        <img src={`/services/${item.id}.svg`} alt="" /> 
                      </a>
                      <h1 style={{color:'white'}}>{item.name}</h1>
                      <h3>COST: {item.cost}</h3>
                
                      <p>
                        

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in arcu sodales, semper urna sit amet, placerat dui. Proin vel nisl ut orci semper porta et sit amet lorem. Nunc dapibus lacus id ante laoreet mollis. Vestibulum eu est nibh. Praesent at ex quis nulla maximus accumsan a vel turpis. 
                      </p>
                      
                      </div>
                    </div>
                    <div className={`modal-footer ${styles.backgroundColour}`} >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                       <button type="button" className={`btn btn-md mt-auto ${styles.buttonColour} shadow-lg`}  data-bs-dismiss="modal" onClick={() => setService({item})}>Select this service</button>
                      
                    </div>
                  </div>
                </div>
          </div>
              </div>
            );
          })}
        </div>
      </ServiceHolder>
    </>
  );
}
