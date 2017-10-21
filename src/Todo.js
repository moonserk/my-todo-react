import React from 'react';
import './index.css';

export default class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.state = {id: 0, items: [], text: '', doneItems: []}
    }

    handleClick(e){
        e.preventDefault();
        var newItem = {id: this.state.id + 1, todo: this.state.text};
        this.setState((prevState) => ({id: newItem.id, items : prevState.items.concat(newItem), text : ''}));
    }

    handleChange(e){
        e.preventDefault();
        this.setState({text : e.target.value});       
    }

    handleRemove(e){
        var newItems = this.state.items.filter((item) => item.id !== e.id);
        this.setState({items : newItems});

        var newRemoveItem = {id: e.id, todo: e.todo};
        this.setState((prevState) => ({doneItems : prevState.doneItems.concat(newRemoveItem)}));
        console.log(this.state.doneItems, newRemoveItem);
    }

    render(){
        return (
            <div >
            <form className='left' onSubmit={this.handleClick}>
                <input className='btn' onChange={this.handleChange} value={this.state.text}/>
                <button className='btn' onSubmit={this.handleClick}>ADD</button>
                <div>
                    {this.state.items.map(item => <div className='todoList' 
                                                       onClick={(e) => this.handleRemove(item)}
                                                       key={item.id}>
                                                       {item.todo}
                                                  </div>)}
                </div>
            </form>
            <div className='right'>
                {this.state.doneItems.map(item => <div className='todoListDone' 
                                                       key={item.id}>
                                                       {item.todo}
                                                  </div>)}
            </div>
            </div>

        );
    }
}

class TodoList extends React.Component{
    handleClick = (item) => {
        return {id: item.id, todo: item.todo}
    }
    render(){
        return (
            <ul>
                {this.props.items.map(item => <li onClick={(e) => this.handleClick} 
                                                  key={item.id}>
                                                  {item.todo}
                                              </li>)}
            </ul>
        );
    }
}