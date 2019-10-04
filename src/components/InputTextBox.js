import React, {Component} from 'react';

class InputTextBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            filter:''
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputChangeHandler(event){
        this.setState({
            filter:event.target.value
        });
    }
    submitHandler(event){
        event.preventDefault();
        this.props.inputSubmit(this.state.filter);
    }

    render(){
        return (
        <form onSubmit = {this.submitHandler}> 
            <div className='form-inline'>
                <input type="text" className="form-control" onChange = {this.inputChangeHandler} placeholder="Search here....."/>
                <input type="submit" value="search" className="btn btn-primary ml-3"/>
            </div>
        </form>
        );
    }
}

export default InputTextBox;