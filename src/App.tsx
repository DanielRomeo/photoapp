import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home2 from './pages/Home2';
import Home from './pages/Home';
import Venue from './pages/Venue';
import LeadNavbar from './pages/components/LeadNavbar';
import LocalStorageState from './pages/LocalStorageState';

function App() {
  return (
    <div className="App">
        <LocalStorageState>

    	<BrowserRouter>
        <LeadNavbar></LeadNavbar>
	        <Switch>
	        	{/*Basic routes*/}
            <Route path='/'  exact component={Home} />
            <Route path='/search'  exact component={Home2} />
              <Route path ='/Venue/:id' exact render={props => <Venue {...props} />} />
                
              <Route path='/'  render={ ()=> <div>
                  Page was not found: 404
                </div>} />
	            </Switch>
	      </BrowserRouter>

          </LocalStorageState>
    </div>
  );
}

export default App;