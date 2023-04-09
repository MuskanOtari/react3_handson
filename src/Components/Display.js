import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props){
        super(props);
        console.log(props);
      }
      render() {
        return (
          <>
          <div>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="bottom">
            {this.props.value.map((item,index)=>{
              return(
                <>
                <div className="box">
                <p key={index}>Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
                </div>
                </>
              )
            })}
            </div>
           <div className="back">
           <button onClick={this.props.toggleFunc}>Go Back</button>
         
            </div> </div>
          </>
        )
      }
}
