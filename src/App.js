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
      input: history.location.pathname.substring(1),
      array: NameArray,
      searchString: '',
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

  debounceSearch = _.debounce(e => this.search(e), 1000)

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

  render() {
    return (
      <div className="container">
        <form className="container__form">
          <SearchBar
            onChange={this.handleChangeInput}
            type='text'
            value={this.state.input}
            placeholder='Search...'

          />
          <SubmitButton>
            {this.state.choosedName === '' ? <span>&#128270;</span> : <p>&#128270;</p>}
          </SubmitButton>
        </form>

        <SearchResult
          className="container__elements"
          StateStatus={this.state.status}
          ChooseName={this.chooseName}
          InputValue={this.state.searchString}
          NameArray={this.state.array}
        />
      </div>
    );
  }
}

export default withRouter(App);
