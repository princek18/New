import React from 'react'
import ReactDOM from 'react-dom'
import { StyledButton } from './StyledComponent/StyledButtons'

export const Modal = ({setIsOpen}) => {
    const style = {
    top: "40%",
    position: "fixed",
    left: "40%",
    color: "white",
    background: "blue",
    textAlign: "center",
    padding: "10px"
    }

    return ReactDOM.createPortal(
        <div style={style}>
            <h1>This is the Modal!</h1>
            <StyledButton onClick={() => setIsOpen(false)}>Close</StyledButton>
        </div>,
        document.getElementById("portal")
    )
}
