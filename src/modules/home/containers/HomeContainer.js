import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { setName } from 'modules/home/actions/setName';
import style from './HomeContainer.scss';

class HomeContainer extends Component {

  render() {
    return (
      <div className={style.HomeContainer}>
        <h1>
          <FormattedMessage
            id={'home.title'}
            description={'Home container title'}
            defaultMessage={'Welcome!'}
          />
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
