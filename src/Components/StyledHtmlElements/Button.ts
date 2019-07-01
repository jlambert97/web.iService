import styled from 'styled-components'


const StyledButton = styled.button`
  text-align: center;
  border: none;
  display: inline-block;
  background-color: #fc883f;
  border-radius: 3px;
  cursor: pointer;
  padding: 3px 10px;
  :focus {
    border-color: #bd662f;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  :hover {
    background-color: #bd662f
  }
  :active {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
    transform: translate3d(0, 1px, 0);
  }
`
export default StyledButton
