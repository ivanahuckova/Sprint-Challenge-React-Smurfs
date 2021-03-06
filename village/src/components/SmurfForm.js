import React, { Component } from 'react';
import axios from 'axios';

const smurfsURL = 'http://localhost:3333/smurfs';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const name = this.state.name;
    const age = this.state.age;
    const height = this.state.height;

    axios
      .post(smurfsURL, { name, age, height })
      .then(res => this.props.setSmurfs(res.data))
      .catch(err => console.log(err))
      .finally(this.clearInput);
  };

  clearInput = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input onChange={this.handleInputChange} placeholder="name" value={this.state.name} name="name" />
          <input onChange={this.handleInputChange} placeholder="age" value={this.state.age} name="age" />
          <input onChange={this.handleInputChange} placeholder="height" value={this.state.height} name="height" />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
