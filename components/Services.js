import styled from "styled-components";


const ServiceHolder = styled.div`

`;


const ServiceExamples = [{name:'Medical', text:'medical help'}, {name:'Dental', text:'teeth cleaning'}, {name:'Vaccinations', text:'prevent rabies'}
, {name:'Preventive care', text:'disease prevention'}, {name:'Laser Therapy', text:'healing through lasers'}, 
{name:'Radiology', text:'scans'}, {name:'Surgical', text:'surgery'}, 
{name:'Grooming', text:'clean the pet'}, {name:'Emergency care', text:'urgent care'},
{name:'Weight Management', text:'help lose weight to keep healthy'}, {name:'End of Life', text:'we want to make sure your pet is happy'},
{name:'Physical Rebilitation', text:'Training'}
]


export default function Services() {
    return(
        <>
        <ServiceHolder>
        
        
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 mx-1">
         {ServiceExamples.map(item=> {
           return(
            <div key ={item.name} className="card " >
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.text}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> 
           )
         })}
         </div>
        </ServiceHolder>
        </>
    )
}