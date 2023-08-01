import React, { Component } from 'react'

export default class App extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    nativeLang: "",
    agreement: false,
  }

  handleValue = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  handleChecked = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  validateInput = (e) => {
    if(e.target.value.length < 4){
      // alert("4 simvoldan ko'proq bo'lishi kerak");
    }
  }

  render() {
    const {firstName, email, message, nativeLang,agreement} =this.state;
    return (
      <div className="App container">
      <form>
        <div className='mt-5'>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" value={firstName} onBlur={this.validateInput} onChange={this.handleValue} className="form-control" />
        </div>
        <div className='mt-4'>
          <label htmlFor="email">Email</label>
          <input type="email" className='form-control' id='email' value={email} name='email' onChange={this.handleValue} />
        </div>
        <div className='mt-4'>
          <label htmlFor="message">Message</label>
          <textarea name="message" value={message} className='form-control' onChange={this.handleValue} id="message" cols="30" rows="10"></textarea>
        </div>
        <div className='mt-4'>
        <label htmlFor="nativeLang">Native Language</label>
          <select name="nativeLang" className='form-control' id="nativeLang" onChange={this.handleValue} value={nativeLang}>
            <option disabled></option>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="eng">eng</option>
          </select>
        </div>
        <div className="mt-4 form-check mb-5">
          <input type="checkbox" name='agreement' onChange={this.handleChecked} className='form-check-input' id='agreement' value={agreement} />
          <label className='form-check-label' htmlFor="agreement">Agreement</label>
        </div>
      </form>
    </div>
    )
  }
}
