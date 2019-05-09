# react-translator3 (almost) effortless translation components

With react-translator3 you can add translations without messing the overall looks of the code. Languages aren't limited to existing languages.

React-translator3 works with React built-in contexts so no external libraries are needed.

## Installation

in console:
`npm i --save react-translator3`

## Simple example

in App.js:

```
import React from "react";
import { Translator, LanguageSelector, Translate } from "react-translator3";

const translation = {
    "fi": {
         "This is some text.": "Tämä on jotain tekstiä."
     }
};

class App extends React.Component {
    render () {
          return (
                <Translator translation={translation}>
                    <LanguageSelector>
                          <div language="en">English</div>
                          <div language="fi">Finnish</div>
                    </LanguageSelector>
                    <div><Translate>This is some text.</Translate></div>
                </Translator>
          );
    }
}

```

import React and Translator components:

```
import React from "react";
import {Translator, LanguageSelector, Translate} from "react-translator3";
```

create an object for different translations. Note that default translation is not needed:

```
const translation = {
    "fi": {
         "This is some text.": "Tämä on jotain tekstiä."
     }
};
```

link it to `<Translator>` object and wrap your app with that:

```
<Translator translation={translation}>
```

Wrap your text with `<Translate>` object:

```
<div><Translate>This is some text.</Translate></div>
```

Add language selector:

```
<LanguageSelector>
    <div language="en">English</div>
    <div language="fi">Finnish</div>
</LanguageSelector>
```

and you are done!

## Components

There's only three components in react-translator3.

#### Translator

- description: wrapper component for Translator context.
- required props: `translation=<Object>`
- optional props: `language=<string>` for default language.
- usage:

```
<Translator translation={"slithering":{"This is some text.": "SSHHSAaAHSLLLHHSSSSHHHAAAaa!"}"}>
<Translate>This is some text.</Translate>
</Translator>
```

#### Translate

- description: Marker for text that needs to be translated.
- required elements: The element inside `<Translate>` needs to be plain string. {"This is some text"} will do.
- optional props: `language=<string>` can be used to make fixed translations or translations that differs from the current language.
- usage:

```
<Translate>This is some text</Translate>
```

#### LanguageSelector

- description: Tool for making language selector. manipulates elements inside LanguageSelector
- required elements and props: any element that is inside `<LanguageSelector>` needs to have a prop `language=<string>`
- usage:

```
<LanguageSelector>
  <a language="slithering">SSSslsllllllaaaaahhhh!</a>
  <a language="klingon">Huh?</a>
</LanguageSelector>
```

## Some tips

`<Translate>` is somewhat long name for object that is used everywhere in the project. You it is recommended to make it little bit shorter by importing it with an alias:

```
import {Translate as T} from "react-translator3";
```

You can use functions in translation object as long as functions return a string.
Note that in this case it is wise to give `<Translator>` a default language. Otherwise you will see only "today" rendered as a plain string.

```
import React from "react";
import {Translate as T, Translator } from "react-translator3";
const translation = {
    en: {
        today: () => new Date().toLocaleDateString("gb")
    },
    fi: {
        today: () => new Date().toLocaleDateString("fi")
    }
}

const LocalClock = () => {
    return (
        <Translator language="en" translation={translation}>
            <div><T>today</T></div>
        </Translator>
    );
}
export default LocalClock;
```
