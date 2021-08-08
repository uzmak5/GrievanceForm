import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className="container p-4">
        <h2 className="text-center">Grievance Form</h2>
        <form onSubmit={this.props.handleSubmit} className="form-group">
          <label><b>Email :</b></label>
          <input className="form-control" type="email" name="email" required/><br/><br/>
          <label><b>Title :</b></label>
          <input className="form-control" type="text" name="title" required/><br/><br/>
          <label><b>Description :</b></label>
          <input className="form-control" type="text" name="desc" required/><br/><br/>
          <div className="text-center">
          <button className="btn btn-info" type="submit">Submit</button>
          </div>     
        </form>
      </div>
    )
  }
}


export default Form;