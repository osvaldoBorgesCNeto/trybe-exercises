import React from 'react';

const Users = ({ greetingMessage = 'Hi There', match}) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage} {match.params.id}, this is my awesome Users component </p>
  </div>
);

export default Users;