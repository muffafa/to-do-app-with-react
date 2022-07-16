import React, { Component } from 'react'

export default class ToDoList extends Component {
  render() {
    return (
      <ul>
        {
            this.props.tasks.map(task => {
                return (
                <div key={task.id} className="task">
                    <li className={task.completed ? "done": ""} onClick={()=> this.props.completeToDo(task.name)}>{task.name}</li>
                    <button onClick={()=> this.props.removeToDo(task.name)}>Sil</button>
                </div>
                )
            })
        }
      </ul>
    )
  }
}
