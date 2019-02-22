import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
// import Artist from './artist/Artist';
import Lyrics from './lyrics/Lyrics';
import Search from './search/Search';
import Songs from './songs/Songs';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/artist/:name/:id' component={Songs}/>
          <Route exact path='/songs/:artist/:song' component={Lyrics}/>
          <Route exact path='/' component={Search}/>
        </Switch>
      </Router>
    </Fragment>
  );


}
