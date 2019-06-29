import styled, { css } from 'styled-components'

export const Status = {
  Invalid: 'salmon',
  Required: 'palegreen',
  Default: ''
}

interface textInputProps {
  status?: string;
}

const StyledInput = styled.input`
    margin: 0 .25rem;
    min-width: 125px;
    border: 1px solid #eee;
    border-left: 2px solid;
    border-radius: 5px;
    transition: border-color .5s ease-out;
    border-left-color: ${(p: textInputProps) => p.status};
`
export default StyledInput
