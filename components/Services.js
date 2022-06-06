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
  { name: "Medical", text: "medical help", id: 1, explain:'Our clinic operates through a social enterprise model. Our fee structure is set so that we can best serve all pet parents in-need, through the provision of high-quality, high-volume services. We have a two-tier pricing model that takes the small profits from our full paying clientele, and uses them to subsidize and provide lower cost services to qualifying individuals in need.' },
  { name: "Dental", text: "teeth cleaning", id: 2, explain:'clean your pets teeth so it is not dirty'},
  { name: "Vaccinations", text: "prevent rabies", id: 3 },
  { name: "Preventive care", text: "disease prevention", id: 4 },
  { name: "Laser Therapy", text: "healing through lasers", id: 5 },
  { name: "Radiology", text: "scans", id: 6 },
  { name: "Surgical", text: "surgery", id: 7 },
  { name: "Grooming", text: "clean the pet", id: 8 },
  { name: "Emergency care", text: "urgent care", id: 9 },
  {
    name: "Weight Management",
    text: "help lose weight to keep healthy",
    id: 10,
  },
  {
    name: "End of Life",
    text: "we want to make sure your pet is happy",
    id: 11,
  },
  { name: "Physical Rebilitation", text: "Training", id: 12 },
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
            className="form-control-lg text-center w-100"
            placeholder="Service Name"
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
                      className={`btn btn-md mt-auto ${styles.buttonColour} rounded-pill shadow-lg`}
                    >
                      Read More
                    </a>
                  </div>
                </div>

                <div className="modal fade" id={`exampleModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered `}>
                  <div className={`modal-content ${styles.backgroundColour}`} >
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
                      <h3>COST: XXXX</h3>
                
                      <p>
                        LOREM IMPSUM LOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUMLOREM IMPSUM
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
