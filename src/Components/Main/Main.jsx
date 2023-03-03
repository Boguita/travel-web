import React from 'react'
import './main.css';
import  {Places}  from './Places' 

const Main = () => {  
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">          
            <Places />          
        </div>
    </section>
  )
}

export default Main