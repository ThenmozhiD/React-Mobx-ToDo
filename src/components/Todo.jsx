import React, { Component } from "react";
import { observer } from "mobx-react";
import store from '../store/todoStore';
@observer class ToDo extends React.Component {
 constructor(){
   super();
   this.state = {
     text:''
   }
  this.addToStore = this.addToStore.bind(this);
  this.addText = this.addText.bind(this);
 }

 addToStore(){
  store.todoList.push(this.state.text);
 }
 addText= (e) => {
  this.setState({text: e.target.value});
  
}

clearText = (e) =>{
  e.target.value = ''
}
  render() {
    return (
      <div className="panel panel-primary">
      <div className="panel-heading">Add To Do's</div>
      <div className="panel-body">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="To Do Item" aria-describedby="basic-addon2" onChange={this.addText} onBlur={this.clearText}/>
          <span className="input-group-addon" id="basic-addon2" onClick = {this.addToStore}>Add</span>
      </div>
      
      </div>
  
    </div>
        
        
      

    );
  }

  
}

export default ToDo;
