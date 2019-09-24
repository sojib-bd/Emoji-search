import React, { Component } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import filterEmoji from "./components/filterEmoji";
import EmojiResult from "./components/EmojiResult";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = e => {
    this.setState({
      filteredEmoji: filterEmoji(e.target.value, 20)
    });

    console.log(this.state.filteredEmoji);
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResult emojiDate={this.state.filteredEmoji} />
      </div>
    );
  }
}

export default App;
