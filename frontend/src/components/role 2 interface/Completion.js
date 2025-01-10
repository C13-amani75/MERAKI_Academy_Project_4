import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../App'
const Completion = () => {
    const {loginInfo} = useContext(userContext)
return (
    <div className='completed'> 
        <p>"Thank you <i className='n1'>{loginInfo}</i>  for trusting us with your style. Your order is being prepared with care, and we’re so excited for you to rock your new outfits!" </p>
        <p>Best wishes<br/><i className='n1'>Camelia Store Team</i></p>
    </div>
)
}

export default Completion