import React from 'react';

export const UserContext = React.createContext();

class UserProvider extends React.Component {
 
  state = {
    name: 'Jeniffer Carvalho',
    user: 'jenicarvalho',
    likes: 20
  }; 

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;