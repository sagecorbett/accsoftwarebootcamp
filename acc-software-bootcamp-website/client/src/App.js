import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';

// ALL PAGES 
import Home from './components/pages/home/Home';
import Signup from './components/pages/signup/Signup';
import FAQ from './components/pages/faq/FAQ';
import Education from './components/pages/education/Education';
import TrialClass from './components/pages/TrialClass/TrialClass';
import Team from './components/pages/team/Team';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-150854051-1');
ReactGA.pageview(window.location.pathname + window.location.search);


// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

// // Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });


class App extends Component {


  render(){
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/faq" component={FAQ} />
            <Route path="/education" component={Education} />
            <Route path="/trialclass" component={TrialClass} />
            <Route path="/team" component={Team} />
          </Switch>
        </Layout>
      </Router>
     )
  }
}

export default App;