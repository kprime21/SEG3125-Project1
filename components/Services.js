import styled from "styled-components";


const ServiceHolder = styled.div`
height:100vh;
`;




export default function Services() {
    return(
        <>
        <ServiceHolder>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
<div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </ServiceHolder>
        </>
    )
}