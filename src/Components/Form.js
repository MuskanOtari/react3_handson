import { Component } from 'react';
import Display from "./Display";
class Form extends Component {
    state={
        name:"",
        department:"",
        rating:"",
        clicked:true,
        data:[]
    }
    handleChange =(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
        this.setState({[e.target.department]:[e.target.value]})
        this.setState({[e.target.rating]:[e.target.value]})
    }
    handleSubmit=()=>{
        const dataObj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        const arr=this.state.data;
        arr.push(dataObj);
        this.setState({[this.state.data]:arr,clicked:false});
    }
    toggleFunction=()=>{
      this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <>
      {this.state.clicked ?
      <div>
      <div className="oneDiv">
       <h1 >EMPLOYEE FEEDBACK FORM</h1>
       <div className="form">
       <div className="row">
       <label>Name: </label>
       <input type='text' placeholder="Enter Your Name" name="name" onChange={this.handleChange}/>
       </div>
       <div className="row">
       <label>Department: </label> 
       <input type='text' placeholder="Enter Your Department" name="dept" onChange={this.handleChange}/>
       </div>
      <div className="row">
      <label>Rating: </label> 
      <input type='text' placeholder="Enter Rating" name="rating" onChange={this.handleChange}/>
      </div>
      <button onClick={this.handleSubmit}>Submit</button>
       
      </div>
      </div>
      </div>:
      <div>
      <Display value={this.state.data} toggleFunc={this.toggleFunction}/>
      </div>
      }
      </>
    )
  }
}



export default Form;