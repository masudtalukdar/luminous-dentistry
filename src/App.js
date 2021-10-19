import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import EmergencyDentist from './Component/EmergencyDentist/EmergencyDentist';
import Home from './Component/Home/Home';
import NavMenu from './Component/NavMenu/NavMenu';
import NotFound from './Component/NotFound/NotFound';
import Services from './Component/Services/Services';
import Work from './Component/Work/Work';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Component/Context/AuthProvider';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <NavMenu></NavMenu>
          {/* <Home></Home> */}
          {/* <About></About> */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about-us'>
              <About></About>
            </Route>
            <PrivateRoute path='/our-work'>
              <Work></Work>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <Route path='/emergency-doctor'>
              <EmergencyDentist></EmergencyDentist>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
