import React from "react";
import Context from "./Context";

const translate = (lang, str, translations) => {
  if (!lang || !translations[lang] || !translations[lang][str]) return str;
  return translations[lang][str];
};

export class Translate extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context =>
          translate(context.language, this.props.children, context.translation)
        }
      </Context.Consumer>
    );
  }
}

export default Translate;
