import React, { Component } from "react";

class SearchBox extends Component {
  // componentWillReceiveProps(){
  //     this.setState({data:this.props})
  // }

  //   onTextChanged(e) {
  //     let searchText = e.target.value;
  //   }

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <form action="">
          <div className="input-field ">
            <input
              placeholder="search monsters"
              id="monster"
              type="search"
              className="white"
              style={{ borderRadius: 5, textAlign: "center" }}
              onChange={(e) => this.props.onTextChanged(e)}
            />
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default SearchBox;
