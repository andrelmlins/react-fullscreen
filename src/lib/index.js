import React from 'react';
import ReactDOM from 'react-dom';
import screenfull from 'screenfull';

export class FullScreenComponent extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{ backgroundColor: 'red', width: 120, height: 120 }}>
        {children({
          ref: this.ref,
          onToggle: () => {
            screenfull.toggle(this.ref.current);
          }
        })}
      </div>
    );
  }
}

export default FullScreenComponent;
