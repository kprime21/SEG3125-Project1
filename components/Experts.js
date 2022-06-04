import styled from "styled-components";


const ExpertsHolder = styled.div`

`;


const ServiceExamples = [{name:'John', text:'medical help'}, {name:'Joe', text:'teeth cleaning'}, {name:'Bartholomew', text:'prevent rabies'}
, {name:'Dingle', text:'disease prevention'}, {name:'Dale', text:'healing through lasers'}, 
{name:'Melly', text:'scans'}, {name:'Carti', text:'surgery'}, 
{name:'Symere', text:'clean the pet'}, {name:'Winthrop', text:'urgent care'}, 
{name:'Melon', text:'I dunno'}, {name:'Jah', text:'ok'},
{name:'Dior', text:'Dior'}, 
]


export default function Experts() {
    return(
        <>
        <ExpertsHolder>
        
        
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
          <div class="row row-cols-1 row-cols-md-4 g-4 mx-1">
         {ServiceExamples.map(item=> {
           return(
            <div key ={item.name} className="card" >
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.text}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> 
           )
         })}
         </div>
        </ExpertsHolder>
        </>
    )
}