import styled from 'styled-components'

export const backgroundModal = styled.div`
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const modal = styled.div`
    background-color: white;
    padding: 12px;
    border-radius: 5px;
`

export const closeButton = styled.button`
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: red;
    padding: 2px;
`

export const modalHeader = styled.div`
    display: flex;
    justify-content: flex-end 
`
