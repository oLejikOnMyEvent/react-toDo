import React, {Component} from 'react';

import './item-add-form.css';


export default class ItemAddForm extends Component {


    state ={
        label: ''
    
    }

    onSubmit = (event)=>{
        event.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState ( {
            label: ''
        })
    }
    onLabelChange = (event)=>{
        
      this.setState({
          label: event.target.value
      })
    }
    render(){
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>

                <input type="text" 
                className="form-control" 
                onChange={this.onLabelChange} 
                placeholder="Write your toDo" 
                value={this.state.label}/>
                <button className="btn btn-outline-secondary"
              >Add item </button>
          
            </form>
        )
    }
}



