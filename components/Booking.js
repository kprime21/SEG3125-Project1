import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";




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
                <div className="row  mb-5 d-flex flex-row justify-content-evenly " >
                    <div className="col-lg-3 shadow-lg rounded fs-2 py-3 mb-3 d-flex flex-column " style={{color:'white'}} align="center">
                     {(service=='-' || service==null) ? 'Service: None' : <span>Service: <span className='fs-2 fw-bold' style={{color:"white", background:'#006EDC', border:'5px, solid, transparent', borderRadius:'15px', padding:'5px'}}>{service.name}</span></span>}
                    <br></br>
                    
                    
                    
                    
                    {(service!='-' && service!=null)?<a className="navbar-brand">
                        <img src={`/services/${service.id}.svg`} alt="" /> 
                    </a>: <a className="navbar-brand">
                        <img src={`/thinking1.svg`} alt="" /> 
                    </a>}
                    <Link href='/services'>
                    <motion.button whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }} className={`btn btn-md mt-auto fs-2 ${styles.buttonColour} rounded-pill shadow-lg`}>{service!='-' && service!=null ? 'Change Service' : <span className={`${styles.blink}`}>Click Here!</span>}</motion.button>
                    </Link>
                    </div>  
                    
                    
                    
                    <div className="col-lg-3 shadow-lg rounded fs-2 mb-3 py-3 d-flex flex-column" style={{color:'white'}} align="center">
                    {(expert=='-' || expert==null) ? 'Expert: None' : <span>Expert: <span className='fs-2 fw-bold' style={{color:"white", background:'#006EDC', border:'5px, solid, transparent', borderRadius:'15px', padding:'5px'}}>{expert.name}</span></span>}
                    <br></br>
                    
                    
                    
                    
                    {(expert!='-' && expert!=null)?<a className="navbar-brand">
                        <img src={`/experts/${expert.id}.svg`} alt="" /> 
                    </a>:  <a className="navbar-brand">
                        <img src={`/thinking2.svg`} alt="" /> 
                    </a>}
                    
                    <Link href='/experts'>
                    <motion.button whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }} className={`btn btn-md mt-auto fs-2 ${styles.buttonColour} rounded-pill shadow-lg`}>{expert!='-' && expert!=null ? 'Change Expert' :  <span className={`${styles.blink}`}>Click Here!</span>}</motion.button>
                    </Link>
                    </div>  

                </div>
                
                <div className="row  mb-5 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-4  fs-2 py-5"  align="center">
                  <span style={{color:'white'}}>Pick your day:  <span className='fs-1 fw-bold' style={{color:"white", background:'#006EDC', border:'5px, solid, transparent', borderRadius:'15px', padding:'5px'}}>{value.toDateString()}</span> <br></br> </span>
                        <Calendar  minDate={new Date()} className={`my-auto w-100 `} onChange={changeDay} value={value}></Calendar>
                      
                    </div>
                    <div className="col-lg-4  fs-2 my-5 " style={{color:'white'}} align="center" >
                    <span style={{color:'white'}}>Pick your time: {date==null ?  <span className='fs-2 fw-bold' style={{color:"white", background:'#006EDC', border:'5px, solid, transparent', borderRadius:'15px', padding:'5px'}}>None Selected</span> :<span className='fs-2 fw-bold' style={{color:"white", background:'#006EDC', border:'5px, solid, transparent', borderRadius:'15px', padding:'5px'}}>{date}</span>} <br></br> </span>
                 <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{display:'flex', flexDirection:'column',flexWrap:'wrap'}}>
                { (value.getDay()== 0 || value.getDay()==6) ? 
                times[1].map(item=>{
                  
                return (
                  <React.Fragment key={item}>
                  <input  type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                  <label  onClick={changeDate} className={` ${styles.buttonColourWithBorder} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                  </React.Fragment>
                )}
                ):


                  times[0].map(item=>{
                    return (
                      <React.Fragment key={item+100}>
                      <input type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                      <label onClick ={changeDate} className={` ${styles.buttonColourWithBorder} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                      </React.Fragment>
                    )}
                    )
                
                
                }
                </div>
                 </div>
                    
                  
                    
                </div>

                <div className="row mb-5 mx-auto">
                <div className="col-md-6 mx-auto ">
                        <div className="input-group flex-nowrap py-3 ">
                            <span className={` ${styles.inputColour} input-group-text`}  id="addon-wrapping">Name</span>
                            <input type="text" name="name" onChange={changeInfo}  value={info.name} className={`form-control`}  placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap py-3 ">
                            <span className={` ${styles.inputColour} input-group-text`} id="addon-wrapping">Email</span>
                            <input type="text" name="email" onChange={changeInfo} value={info.email} className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap py-3">
                            <span className={` ${styles.inputColour} input-group-text`} id="addon-wrapping">Phone</span>
                            <input type="text" name="phone" onChange={changeInfo} value={info.phone} className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                    </div>
                
            
                  
            
                  
                  
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
  <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

                <div className="row w-50 mx-auto">
                <button type="button" onClick={confirmAppointment} data-bs-toggle="modal" data-bs-target={`#modalConfirm`} className={`btn btn-lg ${styles.buttonColour} rounded-pill my-5`}> Book your appointment! </button> 

                <div className="modal fade" id={`modalConfirm`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className={`modal-dialog modal-xl modal-dialog-centered`}>
                  <div className={`modal-content ${styles.backgroundColour}`}  style={{border:'5px solid transparent', borderRadius:'25px'}}>
                  <div className={`modal-header ${styles.backgroundColour}`} >
                      <h5 className="modal-title" id="exampleModalLabel"></h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="container-fluid">
                    {service==null || service=='-'|| expert==null || expert=='-' || info.name=="" || info.email=="" || info.phone=="" || date==null? <div> 
                      
                      
                    
                    {service==null ? 
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must select a service</div>
                    </div> : <span></span>}  
                    {expert==null? <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must select a expert</div>
                    </div> : <span></span>}
                    {date==null ? <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must select a time</div>
                    </div> : <span></span>}
                    {info.name==""? <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must select a name</div>
                    </div> : <span></span>}
                    {info.email==""?<div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must enter an email</div>
                    </div> : <span></span>}
                    {info.phone==""? <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                      <div>You must enter a phone number</div>
                    </div> : <span></span>}
                    
                    {/* {expert==null? <div className="alert alert-danger" role="alert">You must selet a expert  <br></br></div> : <span></span>}
                    {info.name==""? <div className="alert alert-danger" role="alert">You must enter a name  <br></br></div>:<span></span>}
                    {info.email==""?<div className="alert alert-danger" role="alert">You must enter a email  <br></br></div>:<span></span>}
                    {info.phone==""? <div className="alert alert-danger" role="alert">You must enter a phone number  <br></br></div>:<span></span>}
                    {date==null ? <div className="alert alert-danger" role="alert">You must select a time</div>: <span></span>} */}
                    
                    </div>  :
                      
                      <>
                      <h1 style={{color:'white'}} align="center">Congrats! {info.name}</h1>
                        

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