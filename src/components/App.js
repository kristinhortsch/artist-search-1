import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
// import Artist from './artist/Artist';
// import Song from './songs/Song';
import Search from './search/Search';
import Songs from './songs/Songs';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/artist/:id' component={Songs}/>
          {/* <Route exact path='/song/:id' component={Lyrics}/> */} */
          <Route exact path='/' component={Search}/>
        </Switch>
      </Router>
    </Fragment>
  );


}
