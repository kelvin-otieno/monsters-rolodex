import React from "react";

const SearchBox = ({onTextChanged,placeholder}) => {
  return (
    <div style={{ display: "inline-block" }}>
      <form action="">
        <div className="input-field ">
          <input
            placeholder={placeholder}
            id="monster"
            type="search"
            className="white"
            style={{ borderRadius: 5, textAlign: "center" }}
            onChange={onTextChanged}
          />
        </div>
        <br />
      </form>
    </div>
  );
};

export default SearchBox;
