import React, { PropTypes } from 'react';
import style from './OnlineIndicator.scss';

const OnlineIndicator = props => {

  const indicatorSize = () => {
    if (!props || !props.size) {
      return null;
    }

    return { width: props.size, height: props.size }
  };

  return (
    <div style={indicatorSize()} className={props.online ? style.Online : style.Offline}/>
  )
};

OnlineIndicator.propTypes = {
  online: PropTypes.bool,
  size: PropTypes.number,
};

export default OnlineIndicator;
