import React from 'react';
import FullScreenComponent from 'react-fullscreen';

const style = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    color: '#1f2041',
    textTransform: 'uppercase'
  },
  screen: { 
    alignItems: 'center',
    backgroundColor: '#417b5a',
    display: 'flex',
    flexFlow: 'column wrap',
    height: 120,
    justifyContent: 'center',
    margin: 10,
    width: 300
  },
  button: {
    backgroundColor: '#4b3f72',
    border: 0,
    borderRadius: 4,
    color: '#e9d2c0',
    marginBottom: 5,
    minWidth: 120,
    padding: 5
  },
  image: {
    cursor: 'pointer',
    width: '50%'
  }
}

const App = () => {
  return (
<<<<<<< HEAD
    <FullScreenComponent onChange={() => console.log('changed')}>
      {({ ref, onToggle }) => {
=======
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
>>>>>>> master
        return (
          <div
            ref={ref}
            style={style.screen}
          >
            <button onClick={() => onRequest()} style={style.button}>FullScreen</button>
            <button onClick={() => onExit()} style={style.button}>Screen</button>
          </div>
        );
      }}
    </FullScreenComponent>
    <FullScreenComponent>
      {({ ref, onToggle }) =>
        <img 
          ref={ref} 
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2"  
          onClick={() => onToggle()} 
          style={style.image}
        />}
    </FullScreenComponent>
    </div>
  );
};

export default App;
