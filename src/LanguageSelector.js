import React from "react";
import Context from "./Context";

export class LanguageSelector extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context =>
          Object.values(this.props.children).map(child =>
            React.cloneElement(child, {
              onClick: () => context.changeLanguage(child.props.language),
              key: child.props.language
            })
          )
        }
      </Context.Consumer>
    );
  }
}
export default LanguageSelector;
