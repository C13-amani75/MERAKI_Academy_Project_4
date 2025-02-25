import React from 'react'
import HeadHome from './HeadHome'
import Footer from './Footer'
import Categories from '../role 2 interface/Categories'
import Services from './Services'
import Worker from './Worker'
import { useContext } from 'react'
import { userContext } from '../../App';
import { ContactUs } from '../role 2 interface/ContactUs'
import AfterCategory from '../shared components/AfterCategory'
const Home = () => {
  const{token} = useContext(userContext)
  return (
    <div className='main'>
      <HeadHome/>
      <Categories/>
      <AfterCategory/>
      <Services/>
      <Footer/>

    </div>
  )
}
/* home ==>nav bar
          category
          services
          footer */

export default Home