import React, { Component } from 'react'

class Display extends Component {

  resolve = (index) =>{
    this.props.updateAction("Resolved",index)
  }

  reject = (index) =>{
    this.props.updateAction("Rejected",index)
  }

  render() {
    let {greviance} = this.props;
    return (
      
      <div className="d-flex flex-column justify-content-center align-items-center">
        {greviance.map((items,index)=>{
          return(
            <div key={index} className="main-box">
              <label>Email : </label><b>{items[0]}</b><br />
              <label>Title : </label><b>{items[1]}</b><br />
              <label>Description : </label><b>{items[2]}</b><br />
              { items[3] === undefined ? 
                    <div className="text-center mt-3"> 
                      <button className="btn btn-submit btn-primary" onClick={()=>this.resolve(index)}>Resolved</button>&ensp;
                      <button className="btn btn-submit btn-danger" onClick={()=>this.reject(index)}>Rejected</button> 
                    </div>
                    : 
                    <div className="text-center"> 
                      {items[3] === "Resolved" ? 
                        <div className="text-success"><b>{items[3]}</b></div>
                        :
                        <div className="text-danger"><b>{items[3]}</b></div>
                    }
                    </div> 
               }         
            </div>
          )
        })} 
      </div>
    )
  }
}

export default Display;