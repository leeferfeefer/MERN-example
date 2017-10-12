import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const serverAddress = "http://localhost:8180";

export default class ViewUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios.get(serverAddress+"/viewUsers")
    .then(res => {
      console.log("RESPONSE", res);
      this.setState({users: res.data});
    })
    .catch(err => {
      console.log("Error getting users from database...");
      console.error(err);
    });
  }

  render() {
    return (
        <div>

        </div>
    );
  }
}
