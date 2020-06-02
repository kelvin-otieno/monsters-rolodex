import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { users } from "./data/users";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    this.originalData = [];
    //this.onTextChanged = this.onTextChanged.bind(this);
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => this.setState({ monsters: users }));
    this.setState(
      { monsters: users },
      () => (this.originalData = this.state.monsters)
    );
  }

  onTextChanged = (e) => {
    console.log(this.originalData);
    let searchText = e.target.value;
    searchText = searchText.toLowerCase();
    const monsters = this.originalData;
    const regex = new RegExp("(" + searchText + ")", "g");
    const filteredData = monsters.filter(
      (monster) => monster.name.toLowerCase().match(regex) //instead of using regex, an easier way would be to use .include function;
    );
    this.setState({ monsters: filteredData });
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">MONSTERS ROLODEX</div>

        <SearchBox
          onTextChanged={this.onTextChanged}
          placeholder="search monsters"
        />

        <div className="row container">
          <CardList list={this.state.monsters} />
        </div>
      </div>
    );
  }
}

export default App;
