import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Navbar from './Nav-Bar'
import Footer from './Footer'
import '../theme/style/app.css'

const App = (props) => {
  return (
    <div className="container">
      <Router>
        <section className='header'>
          <Navbar />
        </section>
        <section className='main'>
          <Switch>
            <Route to='/'>
              <Home />
            </Route>
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
        </section>
        <section className='footer'>
          <Footer />
        </section>
      </Router>
    </div>
  );
}

export default App;
