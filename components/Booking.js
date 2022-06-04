import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css'
import Calendar from 'react-calendar'
import React, { useState, useEffect } from 'react';

const ContainerFluid = styled.div`
  position:relative;
  height:100vh;
  
  
`;


export default function Booking(){
    const [value, onChange] = useState(new Date());

    useEffect(()=>{console.log(value)}, [value])
    
    return(
        <>
            <ContainerFluid  className="container-fluid">
                <div className="row shadow-lg rounded mb-5">
                    <div className="col-lg-4">
                    Service Selected:
                    </div>  
                    <div className="col-lg-4">
                    Expert Selected:
                    </div>  

                </div>
                <div className="row shadow-lg rounded mb-5">
                    <div className="col">
                        <Calendar  onChange={onChange} value={value}></Calendar>
                    </div>
               
                </div>
                <div className="row shadow-lg rounded mb-5">
                    <div className="col">
                        Name
                    </div>
                    <div className="col">
                        Email
                    </div>
                    <div className="col">
                        Phone Number
                    </div>
                    
                </div>

                <div className="row shadow-lg rounded">
                <button type="button" className={`btn btn-lg ${styles.buttonColour} rounded-pill`}> Right Now! </button> 
                </div>
            </ContainerFluid>
        </>
    )
}