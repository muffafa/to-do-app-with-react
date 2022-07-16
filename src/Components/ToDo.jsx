import React, { Component } from 'react'

export default class ToDo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:"",
    }
  }

    changeHandler = (event) => {
        this.setState({
            input:event.target.value
        })
    }

    sumbitHandler = (event) => {
        this.props.addToDo(this.state.input);
        this.setState({
            input:""
        })
        event.preventDefault();
    }

    render() {
    return (
      <form onSubmit={this.sumbitHandler}>
        <input type="text" value={this.state.input} onChange = {this.changeHandler} placeholder="Bir görev ekleyin..."/>
        <button>Ekle</button>
      </form>
    )
  }
}
