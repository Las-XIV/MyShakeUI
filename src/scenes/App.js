import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Navbar from './Nav-Bar'
import Footer from './Footer'

const App = (props) =>{
    return (
      <div className="App">
          <Router>
              <Navbar />
              <Switch>
                  <Route to='/home'>
                    <Home />
                  </Route>
                  <Route to='/products'>
                    <Products />
                  </Route>
                  <Route to='/about'>
                    <About />
                  </Route>
              </Switch>
              <Footer />
          </Router>
      </div>
    );
  }
  
export default App;
  