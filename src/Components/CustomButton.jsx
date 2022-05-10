import React from "react"
import './CustomButton.css'

export default function CustomButton(props){
    const {text, type} = props
    const onClickHandler = ()=>{
        props.clickHandler()
    }
    return(
        <React.Fragment>
            <button className="customButton" type={type} onClick={onClickHandler}>
                {text}
            </button>
        </React.Fragment>
    )
}