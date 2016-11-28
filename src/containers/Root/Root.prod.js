import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import HomeContainer from 'modules/home/containers/HomeContainer';
import DemoContainer from 'modules/demo/containers/DemoContainer';
import ApiContainer from 'modules/api/containers/ApiContainer';
import SignInContainer from 'modules/firebase/containers/SignInContainer';
import LayoutContainer from 'modules/layout/containers/LayoutContainer';

class Root extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={LayoutContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path="demo" component={DemoContainer}/>
            <Route path="api" component={ApiContainer}/>
            <Route path="signin" component={SignInContainer}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default Root;
