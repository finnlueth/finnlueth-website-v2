import React from 'react'

import {Blog, Footer, Header} from './containers';
import {Article, Brand, Navbar} from './components';
import './app.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <Blog/>
      <Footer/>
    </div>
   )
}
 
export default App