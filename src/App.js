import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GithubUserCard from './components/GithubUserCard';


class App extends Component {
  state = {
    users: {}
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/MsMaddyMac')
    .then(res => {
      console.log(res);
      this.setState({
        users: res.data.data
      });
    })
  
    .catch(error => {
    console.log("No information found.", error);
    });
  }

  render() {
    console.log('App is rendering...')
    return (
      <div className="App">
        <h1>Github Users</h1>
        <GithubUserCard users={this.state.users} />
      </div>
    );
  }
}

export default App;
