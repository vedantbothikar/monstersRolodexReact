import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // in normal functions (i mean not arrow function ... normal ones are ->  handlechange() { ... }) ... in these type of functions the value of 'this' is pointing to the function.. so in that type of function this.state wont work becuz in that function there is no state.... but in case of arrow functions the value of 'this' is pointing to the parent in which it lies.. so here in this arrow function 'this' points to the App component (in which handlechange function lives) .. so "this.state"  refers to the state of App component... so everything works.. so if you are using 'this' and you want 'this' to point to the parent... then use arrow function
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

// whenever seState is called, re-render occurs..

export default App;
