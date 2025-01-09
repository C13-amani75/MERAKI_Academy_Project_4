import React from 'react'
import { SlBasket } from "react-icons/sl";
import { RiBookReadFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import { TbTruckReturn } from "react-icons/tb";
const Services = () => {
  return (
    <div>
      <div className='advantiges'>
        <div className='s1'>
          <GrUserWorker className='logo1' />
          <h2>Professional Workers</h2>
          <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>

</div>
<div className='s1'>
<RiBookReadFill className='logo1'/>
<h2>Book An Appointment</h2>
<p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>

</div>
<div className='s1'>
<LuPackageOpen  className='logo1'/>
<h2>Special packaging</h2>
<p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>

</div>
<div className='s1'>
<TbTruckReturn className='logo1'/>
<h2>free global returns</h2>
<p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
</div>
</div>
    </div>
  )
}

export default Services