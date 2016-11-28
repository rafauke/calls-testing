import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { setName } from 'modules/home/actions/setName';
import style from './HomeContainer.scss';

class HomeContainer extends Component {

  render() {
    return (
      <div className={style.HomeContainer}>
        <h1>
          Welcome :) Go to <Link to="demo">Demo</Link> Tab.
        </h1>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  name: PropTypes.string,
  online: PropTypes.bool,
  setName: PropTypes.func,
};

const mapStateToProps = state => ({
  name: state.home.name,
  online: state.online,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch(setName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
