import React from 'react'

import {Blog, Footer, Header} from './containers';
import {Article, Brand, Navbar} from './components';
import {BioModel} from './assets'
import './app.css'

import {Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
            <Navbar />
            <BioModel />
            <Brand />
            <Blog />
            <Footer />
    </div>
    )
}
 
export default App