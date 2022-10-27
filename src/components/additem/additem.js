import React, {Component} from 'react'
import './additem.css'
class AddItem extends Component{
    state = {
        name: ' ',
        age: ' '
    }

    handlChange = (e) => {
        this.setState ({
            [e.target.id] : e.target.value
        })
    }

    handlSubmit = (e) => {
        e.preventDefault() ;
        this.props.addItem(this.state)
        this.setState({
            name:"",
            age:""
        })
        
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handlSubmit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handlChange} value= {this.state.name}/>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handlChange} value={this.state.age}/>
                    <input className='submitbtn' type="submit" value="Add"/>
                </form>
            </div>

        )
    }

}
export default AddItem;