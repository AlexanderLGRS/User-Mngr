import React from "react"
import './CustomInput.css'

export default function CustomInput(props){
    const {label,  id, type, placeHolder,}= props
    const onChangeHandler = (event)=>{
        props.onChange(event.target.value)
    }
    return(
        <React.Fragment>
            <label className="input-label" htmlFor={id}>
                {label}
            </label>
            <input  className="customInput" type={type} id={id} placeholder={placeHolder} onChange={onChangeHandler}/>
        </React.Fragment>
    )
}