import React from 'react';
import FullScreenComponent from '../lib';

const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    width: '100%',
  },
  title: { color: '#1f2041', textTransform: 'uppercase' },
  screen: {
    alignItems: 'center',
    backgroundColor: '#417b5a',
    display: 'flex',
    flexFlow: 'column wrap',
    height: 120,
    justifyContent: 'center',
    margin: 10,
    width: 300,
  },
  button: {
    backgroundColor: '#4b3f72',
    border: 0,
    borderRadius: 4,
    color: '#e9d2c0',
    marginBottom: 5,
    minWidth: 120,
    padding: 5,
  },
  image: { cursor: 'pointer', width: '50%' },
  buttonImage: {
    border: 'none',
    background: 'transparent',
    '&:focus': { outline: 'none' },
  },
};

const App = () => {
  return (
    <div style={style.container}>
      <h1 style={style.title}>React Fullscreen</h1>
      <div>
        <a href="https://github.com/andrelmlins/react-fullscreen">
          <img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/andrelmlins/react-fullscreen.svg?style=social"
          />
        </a>
      </div>
      <FullScreenComponent
        onChange={() => console.log('Screen')}
        onError={() => console.log('Error')}
      >
        {({ ref, onRequest, onExit }) => {
          return (
            <div ref={ref} style={style.screen}>
              <button onClick={() => onRequest()} style={style.button}>
                FullScreen
              </button>
              <button onClick={() => onExit()} style={style.button}>
                Screen
              </button>
            </div>
          );
        }}
      </FullScreenComponent>
      <FullScreenComponent>
        {({ ref, onToggle }) => (
          <button style={style.buttonImage} onClick={() => onToggle()}>
            <img
              alt="Fullscreen"
              ref={ref}
              src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2"
              style={style.image}
            />
          </button>
        )}
      </FullScreenComponent>
    </div>
  );
};

export default App;
