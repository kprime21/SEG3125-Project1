import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css'
import Calendar from 'react-calendar'
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css'



const ContainerFluid = styled.div`
  position:relative;
  height:100vh;
  
  
`;


export default function Booking(){
    const ISSERVER = typeof window === "undefined";

    
    const [service, setService] = useState(
         '-'
    )

    const [expert, setExpert] = useState(
         '-'
    )
    const [value, onChange] = useState(new Date());
    const [time, timeChange] = useState(('10:00'))

    
    useEffect(()=>{
        if(typeof window !== "undefined"){
            setService(localStorage.getItem('service'))
            setExpert(localStorage.getItem('expert'))
        }
    }, [])
    
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
                    
               
                </div>
                <div className="row shadow-lg rounded mb-5">
                <div className="col">
                        <Calendar  onChange={onChange} value={value}></Calendar>
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

                <div className="row shadow-lg rounded">
                <button type="button" className={`btn btn-lg ${styles.buttonColour} rounded-pill`}> Right Now! </button> 
                </div>
            </ContainerFluid>
        </>
    )
}