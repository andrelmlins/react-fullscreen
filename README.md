# React FullScreen

[![npm version](https://badge.fury.io/js/react-fullscreen.svg)](https://www.npmjs.com/package/react-fullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-fullscreen/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-fullscreen.svg?branch=master)](https://travis-ci.com/andrelmlins/react-fullscreen) &bull; [![Dependencies](https://david-dm.org/andrelmlins/react-fullscreen.svg)](https://david-dm.org/andrelmlins/react-fullscreen)

Component that customizes the image and inserts shadow when scrolling exists

## Installation

```
npm i react-fullscreen
// OR
yarn add react-fullscreen
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
import ReactFullscreeen from 'react-fullscreen';

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

| Prop     | Default | Type | Description    |
| -------- | ------- | ---- | -------------- |
| onChange | #c5c5c5 | func | Call in change |
| onError  | #a6a6a6 | func | Call in error  |
