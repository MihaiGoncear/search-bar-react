import React, { Component } from 'react';
import { SearchBar, SubmitButton } from './Components/StyledComponents'
import { SearchResult } from './Components/SearchResult'
import { NameArray } from './Components/NameArray'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      array: NameArray,
      choosedName: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.chooseName = this.chooseName.bind(this);
    this.deleteValueOfInput = this.deleteValueOfInput.bind(this);
  }

  handleChangeInput = (e) => {
    this.setState({
      input: e.target.value,
      choosedName: ''
    })

  }

  chooseName = (e) => {
    this.setState({
      choosedName: e.target.innerText,
      input: '',
    })
  }

  deleteValueOfInput = (e) => {
    this.setState({
      choosedName: '',
      input: ''
    })
  }

  render() {

    console.log(this.state.input)

    return (
      <div className="container">

        <form className="container__form">
          <SearchBar
            onChange={this.handleChangeInput}
            type='text'
            onFocus={this.deleteValueOfInput}
            value={this.state.choosedName === '' ? this.state.input : this.state.choosedName}
            placeholder='Search...'
          />
          <SubmitButton><span>&#128270;</span></SubmitButton>
        </form>

        <SearchResult
          className="container__elements"
          StateStatus={this.state.status}
          ChooseName={this.chooseName}
          InputValue={this.state.input}
          NameArray={this.state.array}
        />

      </div>
    );
  }
}

export default App;
