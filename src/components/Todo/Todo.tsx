import React from 'react'
import { observer } from "mobx-react-lite"
import styled from 'styled-components'
import CheckBox from '../CheckBox/CheckBox'

const Title = styled.p<{ isDone: boolean }>`
font-size: 16px;
margin: 0;
text-decoration: ${props => (props.isDone ? 'line-through' : 'none')} 
color: ${props => props.theme.colors.text1};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 8px;
`

type TodoPropsType = {
    isDone: boolean
    title: string
    changeStatus: () => void
}

const Todo: React.FC<TodoPropsType> = (props: TodoPropsType) => {
    const { isDone, title, changeStatus } = props

    const sendStatus = () => {
        changeStatus()
    }

    return <Wrapper>
        <Title isDone={isDone}  >{title}</Title>
        <CheckBox type='checkBox' checked={isDone} onChange={sendStatus} />
    </Wrapper>
}


export default observer(Todo)