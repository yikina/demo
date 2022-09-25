import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    //添加todo
    addTodo=(event)=>{
        const{keyCode,target}=event;
        if(keyCode!==13){return}
        if(target.value.trim() === ''){
			alert('输入不能为空')
			return
		}
        const todoobj={id:Math.random(),text:event.target.value,done:false}
        this.props.addTodolist(todoobj)
        target.value=''

    }

  render() {
    return (
      <div className='todo-header'><input onKeyUp={this.addTodo} type="text" placeholder="请输入你的任务名称，按回车键确认"/></div>
    )
  }
}
