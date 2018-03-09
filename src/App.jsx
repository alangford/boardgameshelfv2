import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorBoundry from './components/UI/ErrorBoundry';


export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ ErrorBoundry } />
        <Route component={ ErrorBoundry } />
      </Switch>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {
})(App));

App.defaultProps = {
};

App.propTypes = {
};