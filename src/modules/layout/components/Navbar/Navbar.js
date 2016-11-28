import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import OnlineIndicator from 'modules/online/components/OnlineIndicator/OnlineIndicator';

import logo from 'assets/logo.svg';
import { signOut } from 'modules/firebase/actions';
import style from './Navbar.scss';

const Navbar = props => (
  <nav className={'pt-navbar'}>
    <div className={'pt-navbar-group pt-align-left'}>
      <div className={'pt-navbar-heading'}>
        <img className={style.Logo} src={logo} alt="logo"/>
      </div>
      <IndexLink to="/" activeClassName={style.ActiveLink}>
        <button className={'pt-button pt-minimal pt-icon-home'}>Home</button>
      </IndexLink>
      <Link to="/demo" activeClassName={style.ActiveLink}>
        <button className={'pt-button pt-minimal pt-icon-home'}>Demo</button>
      </Link>
    </div>
    <div className={'pt-navbar-group pt-align-right'}>
      <span className={`${style.DemoTitle} pt-text-muted`}>Tables demo</span>
      <OnlineIndicator size={8} online={props.online}/>
    </div>
  </nav>
);

Navbar.propTypes = {
  signOut: PropTypes.func,
  online: PropTypes.bool,
};

const mapStateToProps = state => ({
  online: state.online,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
