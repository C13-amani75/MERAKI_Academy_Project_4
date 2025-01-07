import React from 'react'

import Footer from './Footer'
import Categories from '../role 2 interface/Categories'
import Services from './Services'
import Worker from './Worker'
import { useContext } from 'react'
import { userContext } from '../../App';
const Home = () => {
  const{token} = useContext(userContext)
  return (
    <div className='main'>
      <Categories/>
      <Services/>
      <Worker/>
      <Footer/>

    </div>
  )
}
/* home ==>nav bar
          category
          services
          footer */

export default Home