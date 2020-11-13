
import styled from 'styled-components'

const Button = styled.button`
display: block;
font-size: 16px;
padding: 4px 16px;
outline: none;
border: none;
border-radius: ${props => props.theme.borderRadius};
background: ${props => props.theme.colors.main};
color: ${props => props.theme.colors.white}
`
export default Button