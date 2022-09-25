import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false }
    //鼠标移入移出事件
    mouseMove=(flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }

    }

    //根据item里面的todo值修改更新状态
    passTodo = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }

    }
    //删除todo
    deleteTodo=(id)=>{
        return()=>{
            this.props.deleteTodolist(id)
        }
    }

    render() {
        const { id, text, done ,} = this.props;
        const{mouse}=this.state;
        return (
            <li style={{ backgroundColor:mouse ?   '#ddd':'white' }} onMouseEnter={this.mouseMove(true) }onMouseLeave={this.mouseMove(false)}>
                <label>
                    <input type="checkbox" onChange={this.passTodo(id)} checked={done} />
                    <span>{text}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}
                onClick={this.deleteTodo(id)}>删除</button>
            </li>
        )
    }
}
