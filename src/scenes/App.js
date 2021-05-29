import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import ProductInfo from './ProductInfo'
import Navbar from './Nav-Bar'
import Footer from './Footer'
import '../theme/style/app.css'

const App = (props) => {
  return (
    <div className="app-container">
      <Router>
        <section className='header'>
          <Navbar />
        </section>
        <section className='main'>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/products/:category'>
              <Products />
            </Route>
            <Route path='/info/:product'>
              <ProductInfo />
            </Route>
            <Route path='/about'>
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
