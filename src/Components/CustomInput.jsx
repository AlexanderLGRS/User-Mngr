import React from "react"
import './CustomInput.css'

export default function CustomInput(props){
    const {label, id, type, placeHolder}= props
    return(
        <React.Fragment>
            <label className="input-label" htmlFor={id}>
                {label}
            </label>
            <input className="customInput" type={type} id={id} placeholder={placeHolder}/>
        </React.Fragment>
    )
}