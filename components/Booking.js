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
    const ISSERVER = typeof window === "undefined";

    
    const [service, setService] = useState(
         '-'
    )

    const [expert, setExpert] = useState(
         '-'
    )
    const [value, setValue] = useState(new Date());
    const [date, setDate] = useState()

    
    
      
    
    useEffect(()=>{
        if(typeof window !== "undefined"){
          
            setService(sessionStorage.getItem('service'))
            setExpert(sessionStorage.getItem('expert'))
        }
    }, [])

    const changeDay = (event) => {
      
      setValue(event)
    }

    const changeDate = (event) => {
      setDate(event.target.textContent)

    }

    const confirmAppointment = (event) => {
      prompt(value, date)
    }
    
    return(
        <>
            <ContainerFluid  className="container-fluid">
                <div className="row shadow-lg rounded mb-5">
                    <div className="col-lg-4">
                    Service Selected: {service}
                    </div>  
                    <div className="col-lg-4">
                    Expert Selected: {expert}
                    </div>  

                </div>
                
                <div className="row shadow-lg rounded mb-5">
                <div className="col">
                        <Calendar  onChange={changeDay} value={value}></Calendar>
                        
                    </div>
                 
                    <div className="col">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Name</span>
                            <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Email</span>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">Phone</span>
                            <input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="row shadow-lg rounded mb-5 w-25">
                
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                { (value.getDay()== 0 || value.getDay()==6) ? 
                times[1].map(item=>{
                  
                return (
                  <React.Fragment key={item}>
                  <input  type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                  <label  onClick={changeDate} className={` ${styles.backgroundColour} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                  </React.Fragment>
                )}
                ):


                  times[0].map(item=>{
                    return (
                      <React.Fragment key={item+100}>
                      <input type="radio" className="btn-check" name="btnradio" id={`btnradio${item}`} autoComplete="off"/>
                      <label onClick ={changeDate} className={` ${styles.backgroundColour} btn btn-primary`} htmlFor={`btnradio${item}`}>{item}:00 - {item+1}:00</label>
                      </React.Fragment>
                    )}
                    )
                
                
                }
                </div>
            
                  
                  {/* 
                  <br></br> */}
                  
                  
                </div>

                <div className="row shadow-lg rounded">
                <button type="button" onClick={confirmAppointment} className={`btn btn-lg ${styles.buttonColour} rounded-pill`}> Right Now! </button> 
                </div>
            </ContainerFluid>
        </>
    )
}