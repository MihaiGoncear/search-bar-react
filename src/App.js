import React, { Component } from 'react';
import { SearchBar } from './Components/StyledComponents'
import { SearchResult } from './Components/SearchResult'
import { NameArray } from './Components/NameArray'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      array: NameArray
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  handleChangeInput = (e) => {
    const value = e.target.value

    this.setState({
      input: value
    })

  }

  render() {

    return (
      <div className="container">
        <form className="container__form">
          <SearchBar onChange={this.handleChangeInput} type='text' placeholder='Search...' />
        </form>
        <SearchResult className="container__elements" InputValue={this.state.input} NameArray={this.state.array} />
      </div>
    );
  }
}

export default App;
