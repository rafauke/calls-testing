import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import logo from 'assets/logo.svg';
import LanguageDropdown from 'modules/i18n/containers/LanguageDropdown/LanguageDropdown';
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
      <Link to="/api" activeClassName={style.ActiveLink}>
        <button className={'pt-button pt-minimal pt-icon-home'}>Api demo</button>
      </Link>
      {props.authenticated ?
        <button
          className={'pt-button pt-minimal pt-icon-user'}
          onClick={props.signOut}
        >
          Firebase sign out
        </button> :
        <Link to="/signin" activeClassName={style.ActiveLink}>
          <button className={'pt-button pt-minimal pt-icon-user'}>Firebase sign in</button>
        </Link>
      }
      <span className={'pt-navbar-divider'} />
      <button className={'pt-button pt-minimal pt-icon-user'} />
      <button className={'pt-button pt-minimal pt-icon-notifications'} />
      <button className={'pt-button pt-minimal pt-icon-cog'} />
    </div>
    <div className={'pt-navbar-group pt-align-right'}>
      <LanguageDropdown />
    </div>
  </nav>
);

Navbar.propTypes = {
  authenticated: PropTypes.bool,
  signOut: PropTypes.func,
};

const mapStateToProps = state => ({
  authenticated: state.firebase.authenticated,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
