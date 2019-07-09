import React from 'react';
import PropTypes from 'prop-types';
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

    return children({
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
    });
  }
}

FullScreenComponent.propTypes = {
  children: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func
};

export default FullScreenComponent;
