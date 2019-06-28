import styled from 'styled-components'

export const container = styled.div`
    display: grid;
    grid-template-rows: 50px auto;
`
export const header = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: rgb(105, 105, 104);
`
export const application = styled.div`
    grid-row-start: 2;
    grid-row-start: 3;
    display: flex;
    flex-direction: row;
`
export const menu = styled.div`
  background-color: rgb(180, 201, 219); 
`
export const content = styled.div`
    flex-grow: 1
`
