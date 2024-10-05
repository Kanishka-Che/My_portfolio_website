import React from 'react'
import './Mycv.css'
import resum from './assets/my cv.pdf'


const Mycv = () => {
 
  return (
    <div className='cv'>
      <button className='cv-my'>
        <a href={resum}download="resum">Download</a>
      </button>
    </div>
  )
}

export default Mycv
