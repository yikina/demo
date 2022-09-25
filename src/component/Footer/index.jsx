import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    //全选或者全不选
    selectAll = (event) => {
        this.props.selectAlltodolist(event.target.checked)

    }
    //清除已完成
    clearAll = () => { 
        this.props.clearAlltodo()

    }

    render() {
        const { todos } = this.props;
        const doneTodos = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.selectAll} checked={doneTodos === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneTodos}</span> / 全部{total}
                </span>
                <button onClick={this.clearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
