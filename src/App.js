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
        <div
          className=""
          style={{ display: "inline-block", textAlign: "center" }}
        >
          <div className="col s2 ">
            <SearchBox onTextChanged={this.onTextChanged} />
          </div>
        </div>

        <div className="row container">
          {this.state.monsters.map((monster) => (
            <CardList
              name={monster.name}
              email={monster.email}
              key={monster.id}
              count={monster.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
