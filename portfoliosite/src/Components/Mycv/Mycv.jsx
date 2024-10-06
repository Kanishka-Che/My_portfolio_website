import React from 'react'
import './Mycv.css'
import resum from '../../assets/my cv.pdf'


const Mycv = () => {
 
  return (
    <div className='cv'>
      
        
        <a href={resum}download="resum">
          <button className='cv-my'>Download</button>
        </a>
      
    </div>
  )
}

export default Mycv
