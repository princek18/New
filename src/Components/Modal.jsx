import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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
    const StyledButton = styled.button`
    width: 60px;
    height: 30px;
    border: 0px;
    border-radius: 10px;
    background-color: #4bdb71;
    color: white;
    font-weight: 500;
    cursor: pointer
    `;
    return ReactDOM.createPortal(
        <div style={style}>
            <h1>This is the Modal!</h1>
            <StyledButton onClick={() => setIsOpen(false)}>Close</StyledButton>
        </div>,
        document.getElementById("portal")
    )
}
