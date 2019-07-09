import React, { createRef, memo, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import screenfull from 'screenfull';

const ReactFullScreen = memo(({ children, onChange }) => {
  const element = createRef();

  useEffect(() => return onChange());
  
  return children({
    ref: element,
    onToggle: () => screenfull.toggle(element.current),
    onRequest: () => screenfull.request(element.current),
    onExit: () => screenfull.exit(element.current)
  });
});

ReactFullScreen.propTypes = {
  children: PropTypes.node
};

export default ReactFullScreen;
