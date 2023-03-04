import React, {useEffect} from 'react'
import './main.css';
import  {Places}  from './Places' 

import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {  
   useEffect(() =>{
    Aos.init({duration: 2000})
  },[]
 )
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">          
            <Places  />          
        </div>
    </section>
  )
}

export default Main