import React from "react";
import Context from "./Context";

export class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: undefined
    };
    this.changeLanguage = language => {
      this.setState({ language });
    };
  }
  componentDidMount() {
    if (this.props.translation) {
      this.setState({ translation: this.props.translation });
    } else {
      this.setState({ translation: {} });
    }
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Translator;
