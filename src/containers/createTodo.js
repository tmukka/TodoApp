import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/actionCreator';

class CreateTodo extends Component {
    constructor(props)
    {
        super(props)
        this.state = { todoText: ''}
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e)
    {
        this.setState({
            todoText: e.target.value
        });
    }

    render(){
        return (
            <div>
                <input value = {this.state.todoText} onChange = {this.onChangeTodoText}/>
                <button type="button" onClick={ () => this.setState({todoText: ''}) }>Cancel</button>
                <button type="button" onClick={ () => { this.props.addTodo(this.state.todoText);this.setState({todoText: ''});console.log(this.state.todoText); } }>Add Todo</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateTodo)