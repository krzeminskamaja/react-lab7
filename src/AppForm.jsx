import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

 class AppForm extends Component{
    constructor(props){
        super(props)
        this.state={
            age: '',
            contact:'',
            isVisible: false,
            name: '',
            isActive:''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    generalHandler = (event) => {
        this.setState({
        [event.target.name]:event.target.value

    })}

    handleClick()
    {
        this.setState((ex)=>({isVisible: !ex.isVisible}));
    }


    render()
    {
        const name = this.state.name;
        const age = this.state.age;
        const contact = this.state.contact;
        return(
            <div>
                {this.state.isVisible?<div>
                <form onSubmit={this.submitHandler}>
                <ul>
                <li>Age <input type="number" name='age' value={age} onChange={this.generalHandler}/></li>
                <li>{(this.state.age<18)?"Parent Name":"Name"} <input type="text" name='name' value={name} onChange={this.generalHandler}/></li>
                <li>{(this.state.age<18)?"Parent Phone No":"Email"} <input type="text" name='contact' value={contact} onChange={this.generalHandler}/></li>
                <input type="submit" value="Submit"/>
                </ul>
            </form>
 <Button onClick={this.handleClick}>Cancel</Button></div>       
    : <Button onClick={this.handleClick}>Add an employee</Button> }
            </div>
        );
    }

}
export default AppForm;