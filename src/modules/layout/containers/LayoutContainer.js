import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import bowser from 'bowser';
import Navbar from 'modules/layout/components/Navbar/Navbar';

import './Reset.scss';
import "!!style-loader!css-loader!@blueprintjs/core/dist/blueprint.css";

class App extends Component {
  componentDidMount() {
    if (bowser.name !== 'Chrome') {
      console.warning('You are using wrong browser!');
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}><Navbar/></Col>
        </Row>
        <div style={{margin: '2em 0'}}></div>
        <Row>
          <Col xs={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
