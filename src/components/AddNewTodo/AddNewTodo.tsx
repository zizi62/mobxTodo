import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { observer } from 'mobx-react-lite'
import { ChangeEvent } from 'react'

const ErrorText = styled.p`
font-size: 10px;
color: red;
position:absolute;
bottom: -10px;
`
const Wrapper = styled.div`
display: flex;
position: relative;
padding-bottom: 16px;
margin:0;
justify-content: space-between;
`

type AddNewTodoPropsType = {
    addTodo: (text: string) => void
    sendFilterParams: (text: string) => void
}
const AddNewTodo: React.FC<AddNewTodoPropsType> = (props: AddNewTodoPropsType) => {

    const { addTodo, sendFilterParams } = props

    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setText(e.currentTarget.value)
        sendFilterParams(e.currentTarget.value)
    }

    const sendText = () => {
        if (!text) {
            setError(true)
        } else {
            addTodo(text)
            setText('')
            sendFilterParams('')
        }
    }

    return <Wrapper>
        <Input error={error} type='text' onChange={changeInput} value={text} />
        <Button onClick={sendText}>Add</Button>
        {error ? <ErrorText>The field cannot be empty!</ErrorText> : null}
    </Wrapper>
}

export default observer(AddNewTodo)