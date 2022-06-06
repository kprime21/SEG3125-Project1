import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import React, { useState, useEffect } from 'react';



const ButtonHighlight = styled.button`
:active{
  color:blue;
}
`;

const ContainerFluid = styled.div`
  position:relative;
  
  
  
`;


const times = [[5,6,7,8,9,10,11,12,13,14,15,16], [10,11,12,13,14,15]   ]


export default function Booking(){
    

    
    const [service, setService] = useState(
         '-'
    )
    

    const [expert, setExpert] = useState(
         '-'
    )
    const [value, setValue] = useState(new Date());
    const [date, setDate] = useState()

    const [info, setInfo] = useState({name:'', email:'', phone:''})

    
    
      
    
    useEffect(()=>{
        if(typeof window !== "undefined"){
          
            setService(JSON.parse(sessionStorage.getItem('service')))
            setExpert(JSON.parse(sessionStorage.getItem('expert')))
        }
    }, [])

    const changeDay = (event) => {
      
      setValue(event)
    }

    const changeDate = (event) => {
      setDate(event.target.textContent)

    }

    const changeInfo = (event) => {
      console.log(info)
      setInfo({...info, [event.target.name]: event.target.value})
    }

    const confirmAppointment = (event) => {
      
    }
    
    return(
        <>
            <ContainerFluid  className="container-fluid">
                <div className="row  mb-5 d-flex flex-row justify-content-evenly">
                    <div className="col-lg-4 shadow-lg rounded fs-2 py-3" style={{color:'white'}} align="center">
                    Service: {(service=='-' || service==null) ? 'None' : service.name}
                    <br></br>
                    
                    
                    
                    
                    {(service!='-' && service!=null)?<a className="navbar-brand">
                        <img src={`/services/${service.id}.svg`} alt="" /> 
                    </a>: <a className="navbar-brand">
                        <img src={`/thinking1.svg`} alt="" /> 
                    </a>}
                    <Link href='/services'>
                    <button className={`btn btn-md fs-2 ${styles.buttonColour} rounded-pill shadow-lg`}>{service!='-' && service!=null ? 'Change Service' : 'Click Here!'}</button>
                    </Link>
                    </div>  
                    
                    
                    
                    <div className="col-lg-4 shadow-lg rounded fs-2 py-3" style={{color:'white'}} align="center">
                    Expert: {(expert=='-' || expert==null) ? 'None' : expert.name}
                    <br></br>
                    
                    
                    
                    
                    {(expert!='-' && expert!=null)?<a className="navbar-brand">
                        <img src={`/experts/${expert.id}.svg`} alt="" /> 
                    </a>:  <a className="navbar-brand">
                        <img src={`/thinking2.svg`} alt="" /> 
                    </a>}
                    
                    <Link href='/experts'>
                    <button className={`btn btn-md fs-2 ${styles.buttonColour} rounded-pill shadow-lg`}>{expert!='-' && expert!=null ? 'Change Expert' : 'Click Here!'}</button>
                    </Link>
                    </div>  

                </div>
                
                <div className="row  mb-5 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-4  fs-2 py-5" style={{color:'white'}} align="center">
                  Pick your day:
                        <Calendar style={{backgroundColor:'red'}} className="my-auto" onChange={changeDay} value={value}></Calendar>
                      
                    </div>
                    <div className="col-lg-4  fs-2 my-5 " style={{color:'white'}} align="center" >
                  Pick your time:
                 <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}}>
                { (value.getDay()== 0 || value.getDay()==6) ? 
                times[1].map(item=>{
                  
                return (
                  <React.Fragment key={item}>
                  <input  type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                  <label  onClick={changeDate} className={` ${styles.darkerBackgroundColour} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                  </React.Fragment>
                )}
                ):


                  times[0].map(item=>{
                    return (
                      <React.Fragment key={item+100}>
                      <input type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                      <label onClick ={changeDate} className={` ${styles.darkerBackgroundColour} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                      </React.Fragment>
                    )}
                    )
                
                
                }
                </div>
                 </div>
                    
                  
                    
                </div>

                <div className="row mb-5  w-50 mx-auto">
                <div className="col">
                        <div className="input-group flex-nowrap py-3">
                            <span className={` ${styles.inputColour} input-group-text`}  id="addon-wrapping">Name</span>
                            <input type="text" name="name" onChange={changeInfo}  value={info.name} className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap py-3">
                            <span className={` ${styles.inputColour} input-group-text`} id="addon-wrapping">Email</span>
                            <input type="text" name="email" onChange={changeInfo} value={info.email} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap py-3">
                            <span className={` ${styles.inputColour} input-group-text`} id="addon-wrapping">Phone</span>
                            <input type="text" name="phone" onChange={changeInfo} value={info.phone} className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                    </div>
                
            
                  
            
                  
                  
                </div>



                <div className="row w-50 mx-auto">
                <button type="button" onClick={confirmAppointment} data-bs-toggle="modal" data-bs-target={`#modalConfirm`} className={`btn btn-lg ${styles.buttonColour} rounded-pill`}> Book your appointment! </button> 

                <div className="modal fade" id={`modalConfirm`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-xl modal-dialog-centered `}>
                  <div className={`modal-content ${styles.backgroundColour}`} >
                  <div className={`modal-header ${styles.backgroundColour}`} >
                      <h5 className="modal-title" id="exampleModalLabel"></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">
                    {service==null || service=='-'|| expert==null || expert=='-' || info.name=="" || info.email=="" || info.phone=="" || date==null? <div> 
                      
                      
                    
                    {service==null ? <>You must selet a service <br></br></> : <span></span>}  
                    {expert==null? <>You must selet a expert  <br></br></> : <span></span>}
                    {info.name==""? <>You must enter a name  <br></br></>:<span></span>}
                    {info.email==""?<>You must enter a email  <br></br></>:<span></span>}
                    {info.phone==""? <>You must enter a phone number  <br></br></>:<span></span>}
                    {date==null ? <>You must select a time</>: <span></span>}
                    </div>  :
                      
                      <>
                      <h1 style={{color:'white'}} align="center">Hi! {info.name}</h1>
                        

                      <p className="fs-2" align="center">
                        We have you booked for <span className={`${styles.lightColour}`}>{date}</span> on <span className={`${styles.lightColour}`}>{value.toLocaleDateString()}</span>
                        <br></br>
                        <br></br>
                        You will be coming in for <span className={`${styles.lightColour}`}>{service.name}</span> services
                        <br></br>
                        <br></br>
                         <span className={`${styles.lightColour}`}>Dr.{expert.name}</span> will be taking care of your furry friend!
                         <br></br>
                        <br></br>
                        

                      </p>

                      

                      <p className="fs-4" align="center">
                        We have sent a confirmation message to  <span className={`${styles.lightColour}`}> {info.email}</span>
                        <br></br>
                        We will call you 24 hours before at <span className={`${styles.lightColour}`}> {info.phone} </span>

                        <br></br>
                        
                      </p>
                      <p fs='5' align="center">
                      <br></br>
                        If you have anymore questions call us! 
                        <li><a href="#">Tel.: 613-562-5700</a></li>
                        <li><a href="#">Toll-free: 1-877-868-8292</a></li>
                        <li><a href="#">Fax: 613-562-5323</a></li>
                      </p>
                      </>
                      }
                      </div>
                    </div>
                    <div className={`modal-footer ${styles.backgroundColour}`} >
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                       {/* <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={() => setService({item})}>Select this service</button> */}
                      
                    </div>
                  </div>
                </div>
          </div>
                </div>
            </ContainerFluid>
        </>
    )
}