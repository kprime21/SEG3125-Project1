import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import styles from './Extra.module.css'
import Calendar from 'react-calendar'
import TimePicker from 'react-time-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';
import React, { useState, useEffect } from 'react';


const TimePick = styled(TimePicker)`
.react-time-picker {
  display: inline-flex;
  position: relative;
}
.react-time-picker,
.react-time-picker *,
.react-time-picker *:before,
.react-time-picker *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-time-picker--disabled {
  background-color: #f0f0f0;
  color: #6d6d6d;
}
.react-time-picker__wrapper {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  border: thin solid gray;
}
.react-time-picker__inputGroup {
  min-width: calc((4px * 3) +  0.54em * 6  +  0.217em * 2);
  flex-grow: 1;
  padding: 0 2px;
  box-sizing: content-box;
}
.react-time-picker__inputGroup__divider {
  padding: 1px 0;
  white-space: pre;
}
.react-time-picker__inputGroup__input {
  min-width: 0.54em;
  height: 100%;
  position: relative;
  padding: 0 1px;
  border: 0;
  background: none;
  font: inherit;
  box-sizing: content-box;
  -moz-appearance: textfield;
}
.react-time-picker__inputGroup__input::-webkit-outer-spin-button,
.react-time-picker__inputGroup__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.react-time-picker__inputGroup__input:invalid {
  background: rgba(255, 0, 0, 0.1);
}
.react-time-picker__inputGroup__input--hasLeadingZero {
  margin-left: -0.54em;
  padding-left: calc(1px +  0.54em);
}
.react-time-picker__inputGroup__amPm {
  font: inherit;
  -moz-appearance: menulist;
}
.react-time-picker__button {
  border: 0;
  background: transparent;
  padding: 4px 6px;
}
.react-time-picker__button:enabled {
  cursor: pointer;
}
.react-time-picker__button:enabled:hover .react-time-picker__button__icon,
.react-time-picker__button:enabled:focus .react-time-picker__button__icon {
  stroke: #0078d7;
}
.react-time-picker__button:disabled .react-time-picker__button__icon {
  stroke: #6d6d6d;
}
.react-time-picker__button svg {
  display: inherit;
}
.react-time-picker__clock {
  width: 200px;
  height: 200px;
  max-width: 100vw;
  padding: 25px;
  background-color: white;
  border: thin solid #a0a096;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
}
.react-time-picker__clock--closed {
  display: none;
}

`;



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
                        <TimePick onChange={timeChange} value={time}></TimePick>
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