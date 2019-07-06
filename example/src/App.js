import React from 'react';
import FullScreenComponent from 'react-fullscreen';

const App = () => {
  return (
    <FullScreenComponent
      onChange={() => console.log('Screen')}
      onError={() => console.log('Error')}
    >
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
    </FullScreenComponent>
  );
};

export default App;
