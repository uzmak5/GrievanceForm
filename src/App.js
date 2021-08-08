
import React, { Component } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      greviance : []
    }
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    let {email, title, desc} = event.target.elements
    let arr = [email.value, title.value, desc.value]
    this.setState({
      greviance : [...this.state.greviance, arr]
    },()=>{
      event.target.reset()
    })
  }

  updateAction = (status,index)=>{
    let updatedgre = this.state.greviance.map((contact,ind)=>{
      if(ind === index) {
        contact.push(status)
        return contact
      } 
        return contact
    })

    this.setState({
      greviance: updatedgre
    })
  }

  render() {
    return (
      <div className="container bg-dark">
        <Form handleSubmit = {this.handleSubmit} />
        <Display greviance = {this.state.greviance} updateAction = {this.updateAction}/>
      </div>
    )

    
  }
}

export default App;