import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import NavMenu from './Pages/NavMenu/NavMenu';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavMenu></NavMenu>
        <Home></Home>

        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about-us'></Route>

          <Route path='*'>{/* <NotFound></NotFound> */}</Route>
        </Switch>
        {/* <Route to='/footer'>
          <Footer></Footer>
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
