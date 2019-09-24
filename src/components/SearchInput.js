import React from "react";
import "./SearchInput.css";

class SearchInput extends React.Component {
  handleChange = e => {
    this.props.textChange(e);
  };

  render() {
    return (
      <div className="component-search-input">
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchInput;
