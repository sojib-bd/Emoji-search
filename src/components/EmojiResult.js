import React from "react";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";

export default class EmojiResult extends React.Component {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-result">
        {this.props.emojiDate.map(emojiDate => (
          <EmojiResultRow
            key={emojiDate.title}
            symbol={emojiDate.symbol}
            title={emojiDate.title}
          />
        ))}
      </div>
    );
  }
}
