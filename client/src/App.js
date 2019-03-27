import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import checkForToken from './utils/checkForToken';
import Main from './components/main/main';

import Authentication from './components/Auth/AuthContainer';
import ReviewContainer from './components/review/reviewContainer';
import DashboardContainer from './components/dashboard/dashboardContainer';
import EditReviewContainer from './components/editReview/editReviewContainer';
import DeleteReview from './components/deleteReview/deleteReview';

checkForToken(localStorage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/auth" component={Authentication} />
            <Route exact path="/review" component={ReviewContainer} />
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/editreview" component={EditReviewContainer} />
            <Route exact path="/deletereview" component={DeleteReview} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
