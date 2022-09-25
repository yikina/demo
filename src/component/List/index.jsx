import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        const { todos,updateTodo,deleteTodolist} = this.props;
        return (
            <ul className="todo-main">
           {todos.map((todos)=>{return <Item key={todos.id}{...todos} updateTodo={updateTodo}
           deleteTodolist={deleteTodolist}/ >})}
          

            </ul>
        )
    }
}
