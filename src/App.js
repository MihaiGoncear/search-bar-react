import React, { Component } from 'react';
import { SearchBar } from './Components/StyledComponents'
import { SearchComponent } from './Components/SearchComponent'
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

  newFunc = () => {
    let newArr = []

    this.state.array.map(name => 
        name.toLowerCase().includes(this.state.input.toLowerCase()) ? newArr.push(name) : null
      )

    this.setState({ 
      array: newArr
    })
  }

  render() {
    console.log(this.state.array)
    console.log(this.state.input)

    return (
      <div className="container">
        <form className="container__form">
          <SearchBar onChange={this.handleChangeInput} type='text' placeholder='Search...' />
        </form>
          <SearchComponent className="container__elements" InputValue={this.state.input} NameArray={this.state.array}/>
      </div>
    );
  }
}

export default App;
