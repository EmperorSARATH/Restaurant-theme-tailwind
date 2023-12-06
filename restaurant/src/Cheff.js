import React from 'react';
import Souma from './Souma.jpg'
import Chef2 from './chef2.jpg'
import Megumi from './megumi.jpg'


const Chef =()=>{
  return(
    <div className=' mt-20 mb-10'>
      <h1 className='flex justify-center text-5xl mb-20 font-bold'>Our Chef's</h1>
    <div className='Cheff-header flex justify-center '>
      <div className='chef1 mr-3'>
      <img src={Souma} className="h-80"/>
      <h1 className='flex justify-center font-bold font-serif'>Souma</h1>
      </div>

      <div className='chef2  mr-3'>
      <img src={Chef2}  className="h-80 " />
      <h1 className='flex justify-center font-bold font-serif'>Saiba Joichiro</h1>
      </div>

      <div className='chef3'>
      <img src={Megumi} className="h-80" />
      <h1 className='flex justify-center font-bold font-serif'>Megumi</h1>
      </div>


    </div>
    </div>

  )
}

export default Chef;
