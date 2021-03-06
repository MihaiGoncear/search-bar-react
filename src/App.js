import React, { Component } from 'react';
import { SearchBar, SubmitButton } from './Components/StyledComponents';
import { SearchResult } from './Components/SearchResult';
import { NameArray } from './Components/NameArray';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import './App.css'
import history from './history';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: history.location.pathname === '/home' ? '' : history.location.pathname.substring(1),
      array: NameArray,
      searchString: '',
      choosedNamesArray: []
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.chooseName = this.chooseName.bind(this);
  }

  search = (str) => {
    this.setState({
      searchString: str
    })
    history.push({
      pathname: '/' + str,
    })
  }

  debounceSearch = _.debounce(e => this.search(e), 400)

  handleChangeInput = (e) => {
    this.setState({
      input: e.target.value,
    })
    this.debounceSearch(e.target.value)
  }

  chooseName = (e) => {
    this.setState({
      input: e.target.innerText,
    })
    this.search(e.target.innerText)
  }

  addNameToChoosedList = () => {
    let newChoosedNamesArray = this.state.choosedNamesArray
    let choosedNameFromInput = this.state.input
    let newFullNameArray = this.state.array


    !newChoosedNamesArray.find(item =>
      item === choosedNameFromInput) && newFullNameArray.includes(choosedNameFromInput)
      ? newChoosedNamesArray.push(choosedNameFromInput)
      : alert("This Name doesn't exist! Please choose another name")

    newFullNameArray.map((nm, index) =>
      nm === choosedNameFromInput ? newFullNameArray.splice(index, 1) : null
    )

    this.setState({
      choosedNamesArray: newChoosedNamesArray,
      array: newFullNameArray,
      input: '',
    })

    this.search('home')
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <form className="container__form">
          <SearchBar
            onChange={this.handleChangeInput}
            type='text'
            value={this.state.input}
            placeholder='Search...'
          />
          <SubmitButton role="button" onClick={this.addNameToChoosedList}>
            <span>+</span>
          </SubmitButton>
        </form>

        <SearchResult
          className="container__elements"
          StateStatus={this.state.status}
          ChooseName={this.chooseName}
          InputValue={this.state.searchString}
          NameArray={this.state.array}
        />

        <ol className="container__choosed">
          {
            this.state.choosedNamesArray.map((nm, index) =>
              <li key={index}>{nm}</li>
            )
          }
        </ol>
      </div>
    );
  }
}

export default withRouter(App);
