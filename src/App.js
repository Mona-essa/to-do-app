import React ,{Component } from "react";
import TodoItem from "./components/todoitem/todoitem";
import AddItem from "./components/additem/additem";
import './index.css'
class App extends Component {
  state ={
    items: [
      {id:1 , name:"mona", age:33},
      {id:2 , name:"mohamed", age:36},
      {id:3 , name:"mazen", age:8}
    ]
  }
  deletItem = (id) => {
   const items = this.state.items.filter(item => {
    return item.id !== id
    })
this.setState({items})}

addItem = (item) => {
  item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}

  render() {
    return(
    <div className="main">
      Todo Items
      <TodoItem  className="todo" items = {this.state.items} deletItem = {this.deletItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
    )
  }
}
export default App;
