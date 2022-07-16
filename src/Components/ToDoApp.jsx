import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDo from './ToDo'
import { v4 as uuidv4 } from 'uuid';

export default class ToDoApp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         tasks:[
            
         ]
      }
    }

    addToDo = (newTask) => {
        if(!newTask){
            alert("Lütfen bir görev giriniz");
            return;
        }

        if(this.state.tasks.find(task => task.name === newTask)){
            alert("Bu görev zaten var");
            return;
        }

        const task = {id:uuidv4(), name:newTask, completed:false};

        this.setState({
            tasks:[...this.state.tasks, task]
        })
    }

    removeToDo = (name) => {
        const filteredTasks = this.state.tasks.filter(task => task.name !== name);
        this.setState({
            tasks:filteredTasks
        })
    }

    completeToDo = (name) => {
        const newTasks = this.state.tasks.map(task => {
            if(task.name === name){
                task.completed = !task.completed;
            }
            return task;
        }
        );
        this.setState({
            tasks:newTasks
        })
    }

  render() {
    return (
      <div className='ToDoApp'>
        <ToDo addToDo={this.addToDo} />
        <ToDoList completeToDo={this.completeToDo} removeToDo={this.removeToDo} tasks={this.state.tasks} />
      </div>
    )
  }
}
