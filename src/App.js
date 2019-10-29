import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import GithubUserCard from './components/GithubUserCard';


class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/MsMaddyMac')
    .then(response => {
      console.log(response);
    })
  
    .catch(error => {
    console.log("No information found.", error);
    });
  }

  render() {
    console.log('App is rendering...')
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Users</h1>
        </header>
        <div className="user-list">
          {/* <GithubUserList /> */}
        </div>
      </div>
    );
  }
}

export default App;
