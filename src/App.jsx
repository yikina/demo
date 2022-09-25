import React, { Component } from 'react'
import './App.css'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component {
  state = { todos: [{ id: '001', text: '有氧运动', done: true }, 
    { id: '002', text: '阅读', done: false },
    {id:'003',text:'学习axaj',done:false},
    {id:'004',text:'领取快递',done:false}] }
    //添加todo信息
    addTodolist=(todoobj)=>{
      const{todos}=this.state;
      const newTodos=[todoobj,...todos];
      this.setState({todos:newTodos})

    }
  //根据item里面每一个todo的属性修改状态
    updateTodo=(id,done)=>{
      const{todos}=this.state;
      const newTodos=todos.map((todoobj)=>{
        if(todoobj.id===id){return{...todoobj,done}}
        else return todoobj
      })
      this.setState({todos:newTodos})

    }
    //删除todo
    deleteTodolist=(id)=>{
      const{todos}=this.state;
      const newTodos=todos.filter((todo)=>{
        return todo.id!==id
      })
      this.setState({todos:newTodos})
    }

    //全选todo
    selectAlltodolist=(done)=>{
      const {todos}=this.state;
      const newTodos=todos.map((todo)=>{return {...todo,done}})

      this.setState({todos:newTodos})

    }
    //清除所有已完成
    clearAlltodo=()=>{

      const{todos}=this.state;
      const newTodos=todos.filter((todo)=>{
        return !todo.done
      })
      this.setState({todos:newTodos})
    }

  render() {
    const {todos}=this.state;

    return (
      
  
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodolist={this.addTodolist}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodolist={this.deleteTodolist} />
          <Footer todos={todos} selectAlltodolist={this.selectAlltodolist}
            clearAlltodo={this.clearAlltodo}
          />
        </div>
      </div>
    )
  }
}
