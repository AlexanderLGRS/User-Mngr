import React from "react"
import './CustomButton.css'

export default function CustomButton(props){
    const {text, type} = props
    return(
        <React.Fragment>
            <button className="customButton" type={type}>
                {text}
            </button>
        </React.Fragment>
    )
}