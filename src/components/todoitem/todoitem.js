import React from 'react'
import './todoitem.css'

const TodoItem = (props) => {
    const {items,deletItem} = props;
    const listItem = items.map( item => {
        return(
            <div className='todoitem' key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span className='deletbtn' onClick={() => {deletItem(item.id)}}>&times;</span>
            </div>
        )
    })
      return(
        <div>
           {listItem}
        </div>
      )
}
export default TodoItem;