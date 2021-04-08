import React from 'react';
import FullScreenComponent from '../lib';

const App = () => (
  <div style={style.container}>
    <h1 style={style.title}>React Fullscreen</h1>
    <h4>Component that performs fullscreen in DOM Elements</h4>
    <br />
    <div style={style.root}>
      <div style={style.card}>
        <FullScreenComponent
          onChange={() => console.log('Screen')}
          onError={() => console.log('Error')}
        >
          {({ ref, onRequest, onExit }) => (
            <div ref={ref} style={style.screen}>
              <button onClick={() => onRequest()} style={style.button}>
                FullScreen
              </button>
              <button onClick={() => onExit()} style={style.button}>
                Screen
              </button>
            </div>
          )}
        </FullScreenComponent>
      </div>
      <div style={style.card}>
        <FullScreenComponent>
          {({ ref, onToggle }) => (
            <div
              ref={ref}
              style={style.image}
              onClick={() => onToggle()}
              aria-hidden="true"
              role="button"
              tabIndex="0"
            >
              <h1 style={style.imageText}>Click Here</h1>
            </div>
          )}
        </FullScreenComponent>
      </div>
    </div>
  </div>
);

const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    padding: 16,
  },
  title: { marginBottom: 0, textAlign: 'center' },
  root: { width: '100%', display: 'flex', justifyContent: 'center' },
  card: {
    boxShadow: `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
    borderRadius: 2,
    width: 400,
    minWidth: '40%',
    maxWidth: '40%',
    backgroundColor: 'white',
    height: 400,
    padding: 16,
    boxSizing: 'border-box',
    marginRight: 40,
  },
  screen: {
    backgroundColor: '#01579b',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    backgroundColor: '#FFF',
    border: 0,
    borderRadius: 2,
    color: '#37474f',
    minWidth: 120,
    padding: 5,
    minHeight: 50,
    fontSize: 14,
    fontWeight: 600,
  },
  image: {
    backgroundImage:
      'url("https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% auto',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: { color: 'white', textShadow: '1px 1px 2px black' },
};

export default App;
