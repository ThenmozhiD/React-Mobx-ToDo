import React, { Component } from "react";

import { observer } from "mobx-react";
import store from '../store/todoStore';
import Todo from "./Todo";

@observer
class TodoList extends React.Component {
 
  completed = (e) =>{
    store.completedList.push(e.target.value);
    var todoList = store.todoList.filter(function(item) { 
      return item !== e.target.value 
  })
  store.todoList = todoList;
  }

  editList = (e) => {
    store.todoList[e.target.id] = e.target.value;
  }

  deleteToDo = (e) =>{
    var index = parseInt(e.target.id.charAt(0));    
    var newList = store.todoList.filter((_, i) => i !== index)
    store.todoList = newList;
  }
  render() {
    console.log(store.todoList)
    return (
      <div className="panel panel-primary">
      <div className="panel-heading">To Do's List</div>
      <div className="panel-body">
      {store.todoList.map((value,i) => {return(
        <div className="row" key={i}>
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-addon">
              <input value={value} type="checkbox" onChange={this.completed}/>
            </span>
            <input type="text" className="form-control" id={i} onChange = {this.editList} value={value}/>
          </div>
        </div>
        <div className= "col-lg-3">
        <span id={i+'delete'} onClick = {this.deleteToDo} className="glyphicon glyphicon-trash">&nbsp;</span>
        </div>
        </div>
        
      
      
      )})}
      </div>
  
    </div>
     
    );
  }

  
}

export default TodoList;
