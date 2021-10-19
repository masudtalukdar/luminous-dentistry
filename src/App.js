import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import EmergencyDentist from './Component/EmergencyDentist/EmergencyDentist';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import NavMenu from './Component/NavMenu/NavMenu';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';
import Work from './Component/Work/Work';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavMenu></NavMenu>
        {/* <Home></Home> */}
        {/* <About></About> */}
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about-us'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/our-work'>
            <Work></Work>
          </Route>
          <Route path='/emergency-doctor'>
            <EmergencyDentist></EmergencyDentist>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route to='/footer'>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
