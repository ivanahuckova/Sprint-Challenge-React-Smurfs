import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const smurfsURL = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(smurfsURL)
      .then(res => this.setSmurfs(res.data))
      .catch(res => console.log(res.message));
  };

  setSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <SmurfForm setSmurfs={this.setSmurfs} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
