import React from 'react';
import FullScreenComponent from 'react-fullscreen';

const App = () => {
  return (
    <FullScreenComponent>
      {({ ref, onToggle }) => {
        return (
          <div
            ref={ref}
            style={{ backgroundColor: 'red', width: 120, height: 120 }}
          >
            <button onClick={() => onToggle()}>Expandir</button>
          </div>
        );
      }}
    </FullScreenComponent>
  );
};

export default App;
