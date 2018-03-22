import React, { Component } from "react";

import { observer } from "mobx-react";
import store from '../store/todoStore';
import Todo from "./Todo";

@observer
class TodoCompleted extends React.Component {
  constructor(){
    super();
    this.state = {
      showEdit : false
    }
    this.editToDo = this.editToDo.bind(this);
    this.saveToDo = this.saveToDo.bind(this);
  }
  completed = (e) =>{
    store.completedList.push(e.target.value);
    var completedList = store.completedList.filter(function(item) { 
      return item !== e.target.value 
  })
  store.completedList = completedList;
  }

  editList = (e) => {
    store.completedList[e.target.id] = e.target.value;
  }

  deleteToDo = (e) =>{
    var index = parseInt(e.target.id.charAt(0));    
    var newList = store.completedList.filter((_, i) => i !== index)
    store.completedList = newList;
  }
  editToDo = (e) => {
    this.setState({
      showEdit: true
    })
  }
 saveToDo = (e) => {
    this.setState({
      showEdit: false
    })
  }
  render() {
    console.log(store.completedList)
    return (
      <div className="panel panel-primary">
      <div className="panel-heading">Completed To Do's List</div>
      <div className="panel-body">
      {store.completedList.map((value,i) => {return(
        <div className="row" key={i}>
        <div className="col-lg-6">
                      
            <input value={value} type="checkbox" onChange={this.completed} checked/>
            <span className = {this.state.showEdit?'hide':''}> &nbsp; &nbsp;<strike>{value}</strike> </span>
            <input type="text" className = {this.state.showEdit?'form-control':'hide'} id={i} onChange = {this.editList} value={value}/>
            
          
        </div>
        <div className= "col-lg-1">
        <span id={i+'save'} onClick = {this.saveToDo} className="glyphicon glyphicon-floppy-save">&nbsp;</span>
        </div>
        <div className= "col-lg-1">
        <span id={i+'edit'} onClick = {this.editToDo} className="glyphicon glyphicon-pencil">&nbsp;</span>
        </div>
        <div className= "col-lg-1">
        <span id={i+'delete'} onClick = {this.deleteToDo} className="glyphicon glyphicon-trash">&nbsp;</span>
        </div>
        </div>
        
      
      
      )})}
      </div>
  
    </div>
      
      
    );
  }

  
}

export default TodoCompleted;
