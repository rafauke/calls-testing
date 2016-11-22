import React, { PropTypes, Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { FormattedDate, FormattedMessage } from 'react-intl';
import mousetrap from 'mousetrap';

import Demo from 'modules/home/components/Demo';
import OnlineIndicator from 'modules/online/components/OnlineIndicator/OnlineIndicator';
import { setName } from 'modules/home/actions/setName';
import logoStack from 'assets/logo-stack.gif';
import style from './HomeContainer.scss';

class HomeContainer extends Component {
  componentDidMount() {
    mousetrap.bind('enter', this.onEnter);
  }

  componentWillUnmount() {
    mousetrap.unbind('enter');
  }

  @autobind
  onEnter() {
    this.props.setName('DeSmart');
  }

  render() {
    return (
      <div className={style.HomeContainer}>
        <h1>
          <FormattedMessage
            id={'home.title'}
            description={'Home container title'}
            defaultMessage={'Home container'}
          />
        </h1>
        <h2>
          <FormattedMessage
            id={'home.demo'}
            description={'Demo component title'}
            defaultMessage={'Demo component'}
          />
        </h2>
        <Demo name={this.props.name}/>
        <img src={logoStack} alt="stack logo"/>
        <p>
          <FormattedDate
            value={new Date(1459832991883)}
            year={'numeric'}
            month={'long'}
            day={'numeric'}
            weekday={'long'}
          />
        </p>
        <OnlineIndicator online={this.props.online}/>
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

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
