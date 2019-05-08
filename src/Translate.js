import React from "react";
import Context from "./Context";

const translate = (lang, str, translations = {}) => {
  if (!lang || !translations[lang] || !translations[lang][str]) return str;
  if (translations[lang][str] instanceof Function)
    return translations[lang][str]();
  return translations[lang][str];
};

export class Translate extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context =>
          !this.props.language
            ? translate(
                context.language,
                this.props.children,
                context.translation
              )
            : translate(
                this.props.language,
                this.props.children,
                context.translation
              )
        }
      </Context.Consumer>
    );
  }
}

export default Translate;
