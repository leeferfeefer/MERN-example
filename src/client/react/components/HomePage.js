import React from 'react';
import axios from 'axios';
import { FormControl, Button } from 'react-bootstrap';

const serverAddress = "http://localhost:8180";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: "",
      lastNameValue: ""
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstNameValue: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastNameValue: event.target.value});
  }

  clearFields() {
    this.setState({firstNameValue: "", lastNameValue: ""});
  }

  handleOnSubmit(event) {
    event.preventDefault();

    let firstName = this.state.firstNameValue.trim();
    let lastName = this.state.lastNameValue.trim();
    if (!firstName || !lastName) {
      alert("You must fill out both fields!");
      return;
    }
    let submitUserURI = serverAddress+"/submitUser";

    axios.post(submitUserURI, {first : firstName, last : lastName})
    .then(res => {
      alert(res.data.message);
      this.clearFields();
    })
    .catch(err => {
      console.log("Error submitting user to database...");
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to SnuTeam6
        </h1>
        <h4>
          Fill in fields and send to database
        </h4>
        <form className="form-inline">
          <FormControl
            type="text"
            value={this.state.firstNameValue}
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
          />
          <FormControl
            type="text"
            value={this.state.lastNameValue}
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
          />
          <Button
            type="submit"
            onClick={this.handleOnSubmit}
            >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
