import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import screenfull from 'screenfull';

export class FullScreenComponent extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    screenfull.onchange(() => this.props.onChange());
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{ backgroundColor: 'red', width: 120, height: 120 }}>
        {children({
          ref: this.ref,
          onToggle: () => {
            screenfull.toggle(this.ref.current);
          },
          onRequest: () => {
            screenfull.request(this.ref.current);
          },
          onExit: () => {
            screenfull.exit(this.ref.current);
          }
        })}
      </div>
    );
  }
}

FullScreenComponent.propTypes = {
  children: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func
};

export default FullScreenComponent;
