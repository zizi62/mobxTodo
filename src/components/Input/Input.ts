import styled from 'styled-components'

const Input = styled.input<{ error: boolean }>`
display: block;
padding: 4px 12px;
outline: none;
border-radius: ${props => props.theme.borderRadius};
border: ${props => (props.error ? '2px solid red' : 'none')};
margin-right: 16px;
background: #D3D3D3;
`

export default Input