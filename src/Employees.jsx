import React, { Component } from "react";
import AppForm from './AppForm'

class Employees extends Component {
    constructor(props){
        
        super(props);
        
        this.state={
            formVisible: false,
            isFetched: false,
            employees: {},
        };
        
    }
   handleClick(){
    this.setState((prevState) => ({
      formVisible: !prevState.formVisible
  }));
   }
    componentDidMount(){
      return  fetch("http://localhost:3004/employees")
      .then(res => res.json())
      .then(res => this.setState({ employees: res, isFetched: true }))
      .catch(() => this.setState({ hasErrors: true }));
    }
    
    whatColor(color)
    {
      if(color)
      {
        return "green";
      }
      else
      {
        return "gray";
      }
    }
      render() {
      
      if(!this.state.isFetched)
        return <p>Loading...</p>
      else{
          return(

        <div>
            <AppForm onClick={this.handleClick}/>
        {this.state.employees.map((e, ind) => { return (

          <table class="table" key={ind}>
            <tbody>
            <tr style={{color:this.whatColor(e.isActive)}}>
        <td>
              
              <p>Age: {e.age}</p></td><td>
              <p>Name: {e.name}</p>
              </td>
            </tr>
            </tbody>
            </table>
          )
        })
        }
      </div>
          )
      }

    }
  }

export default Employees;