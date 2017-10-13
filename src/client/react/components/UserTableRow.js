import React from 'react';

export default class UserTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{ this.props.index }</td>
        <td>{ this.props.user.firstName }</td>
        <td>{ this.props.user.lastName }</td>
      </tr>
    );
  }
}
