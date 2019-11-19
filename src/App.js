import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './containers/HomePage';
import PsdFilesPage from './containers/PsdFilesPage';
import AlbumPage from './containers/AlbumPage';
import BlogPage from './containers/BlogPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/psdfiles' component={PsdFilesPage}/>
          <Route path='/album' component={AlbumPage}/>
          <Route path='/blog' component={BlogPage}/>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
