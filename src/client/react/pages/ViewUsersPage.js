import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

import UserTableRow from '../components/UserTableRow';

const serverAddress = "http://localhost:8180";

export default class ViewUsersPage extends React.Component {
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
      <Table striped bordered condensed hover>
        <thead>
          <tr>
           <th>#</th>
           <th>First Name</th>
           <th>Last Name</th>
          </tr>
       </thead>
       <tbody>
         {this.state.users.map((user, index) => {
           return (<UserTableRow
              index={index}
              user={user}
           />)
         })}
       </tbody>
      </Table>
    );
  }
}
