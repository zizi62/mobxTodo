import React, { useState } from "react"
import AddNewTodo from "../AddNewTodo/AddNewTodo"
import Todo from '../Todo/Todo'
import { observer } from "mobx-react-lite"
import { useMst } from "../../mst/models"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 16px;
background:  ${props => props.theme.colors.paper};
border-radius: ${props => props.theme.borderRadius};
`

type TodoListPropsType = {
}

const TodoList: React.FC<TodoListPropsType> = () => {
    const { todos, addTodo } = useMst()

    const [filterParametr, setFilterParametr] = useState('')

    const sendFilterParams = (parametr: string) => {
        setFilterParametr(parametr)
    }
    return <Wrapper>
        <AddNewTodo addTodo={addTodo} sendFilterParams={sendFilterParams} />
        {todos.filter(todo => todo.title.toUpperCase().indexOf(filterParametr.toUpperCase()) > -1).map(todo => <Todo key={todo.id} {...todo} changeStatus={todo.changeStatus} />)}
    </Wrapper>
}
export default observer(TodoList)