import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { interfaceDeclaration } from "@babel/types";

 class AppForm extends Component{
    constructor(props){
        super(props)
        this.state={
            age: '',
            contact:'',
            isVisible: false,
            name: '',
            isActive:'',
            isValidationCorrect: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.validation = this.validation.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }
    generalHandler = (event) => {
        this.setState({
        [event.target.name]:event.target.value

    })}

    cancelClick()
    {
        this.setState((ex)=>({isVisible: !ex.isVisible,age: '',contact: '',name: '', isValidationCorrect: true}));
    }
    handleClick()
    {
        this.setState((ex)=>({isVisible: !ex.isVisible}));
    }

    

    validation = (event) =>
    {
        event.preventDefault();
        const r = /\d{10}/;
        const content = this.state.contact;
        if(this.state.age<18)
        {
            if(content.length==9)
            {
               
                if(r.test(String(content)))
                    this.setState(()=>({isValidationCorrect: true}));
                else
                this.setState(()=>({isValidationCorrect: false}));
                
            }
            else 
            this.setState(()=>({isValidationCorrect: false}));
        }
        else
        {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if( re.test(
                String(content).toLowerCase()))
                this.setState(()=>({isValidationCorrect: true}));
                else
                this.setState(()=>({isValidationCorrect: false}));
        }
    }

    
    render()
    {
        const name = this.state.name;
        const age = this.state.age;
        const contact = this.state.contact;
        return(
            <div>
                {this.state.isVisible?<div>
                <form onSubmit={this.validation}>
                <ul>
                <li>Age <input type="number" name='age' value={age} onChange={this.generalHandler}/></li>
                <li>{(this.state.age<18)?"Parent Name":"Name"} <input type="text" name='name' value={name} onChange={this.generalHandler}/></li>
                <li>{(this.state.age<18)?"Parent Phone No":"Email"} <input type="text" name='contact' value={contact} onChange={this.generalHandler}/></li>
                {this.state.isValidationCorrect ? null: <label>{(this.state.age<18)?"Wrong phone number format":"Wrong email format"}</label>}
                <input type="submit" value="Submit"/>
                </ul>
            </form>
 <Button onClick={this.cancelClick}>Cancel</Button></div>       
    : <Button onClick={this.handleClick}>Add an employee</Button> }
            </div>
        );
    }

}
export default AppForm;