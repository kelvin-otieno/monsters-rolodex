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
    this.onTextChanged = this.onTextChanged.bind(this);
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => this.setState({ monsters: users }));
    this.setState({ monsters: users });
  }

  onTextChanged(e) {
    let searchText = e.target.value;
    searchText = searchText.toLowerCase();
    let data = users;
    const regex = new RegExp("(" + searchText + ")", "g");
    let filteredData = data.filter((monster) => {
      let name = monster.name.toLowerCase();
      return name.match(regex);
    });
    this.setState({ monsters: filteredData });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">MONSTERS ROLODEX</div>

        <SearchBox onTextChanged={this.onTextChanged} />

        <div className="row container">
          <CardList list={this.state.monsters} />
        </div>
      </div>
    );
  }
}

export default App;
