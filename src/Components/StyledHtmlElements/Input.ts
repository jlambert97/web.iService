import styled from 'styled-components'

export const Status = {
  Invalid: 'salmon',
  Required: 'palegreen',
  Default: ''
}

interface textInputProps {
  status?: string;
}

const StyledInput = styled.input`
    border: 1px solid #9499a1;
    border-radius: 3px;
    padding: 3px;
    transition: border-color .5s ease-out;
    border-left-color: ${(p: textInputProps) => p.status};
    margin: 3px;
    :focus {
      border-color: #d13d3d;
      box-shadow: 0 0 0 0;
      outline: 0;
    }
`
export default StyledInput
