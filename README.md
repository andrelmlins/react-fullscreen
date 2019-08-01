# React FullScreen

[![npm version](https://badge.fury.io/js/react-fullscreen.svg)](https://www.npmjs.com/package/react-fullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-fullscreen/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-fullscreen.svg?branch=master)](https://travis-ci.com/andrelmlins/react-fullscreen) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-fullscreen.svg)](https://david-dm.org/andrelmlins/react-fullscreen)

Component that performs fullscreen in DOM Elements

## Installation

```
npm i react-easyfullscreen
// OR
yarn add react-easyfullscreen
```

## Demo [Link](https://react-fullscreen.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/react-fullscreen.git
cd react-fullscreen/example
yarn install && yarn start
```

## Examples

```jsx
import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import ReactFullscreeen from 'react-easyfullscreen';

class App extends PureComponent {
  render() {
    return (
      <div>
        <ReactFullscreen>
          {({ ref, onRequest, onExit }) => {
            return (
              <div
                ref={ref}
                style={{ backgroundColor: 'red', width: 120, height: 120 }}
              >
                <button onClick={() => onRequest()}>FullScreen</button>
                <button onClick={() => onExit()}>Screen</button>
              </div>
            );
          }}
        </ReactFullscreen>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```

## Properties

Raw component props (before transform):

| Prop     | Type | Description    |
| -------- | ---- | -------------- |
| onChange | func | Call in change |
| onError  | func | Call in error  |
