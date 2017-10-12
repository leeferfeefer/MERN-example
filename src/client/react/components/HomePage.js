import React from 'react';
import { Button } from 'react-bootstrap';


export default class HomePage extends React.Component {
  constructor(props) {
    this.state = {
      firstNameValue: "",
      lastNameValue: ""
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstNameValue: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastNameValue: event.target.value});
  }

  render() {
    return (
      <div>
        <h3>
          Welcome to SnuTeam6, bitchezzzz
        </h3>
        <h1>
          Fill in fields and send to database
        </h1>
      </div>
      <form>
      <FormGroup>
        <ControlLabel>First Name:</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleFirstNameChange}/>
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
      <Button
      type="submit"
      onClick={this.onSubmit}>
        Submit
      </Button>
      </form>
    );
  }
}
