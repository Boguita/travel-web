import dataPlaces from '../../data/places'
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'

export const Places = () => {  
  return(
    dataPlaces.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
      return(
        <div data-aos="fade-up" key={id} className="singleDestination">

          <div className="imageDiv">
            <img src={imgSrc} alt={destTitle} />
          </div>

          <div className="cardInfo">
            <h4 className='destTitle'>
              {destTitle}
            </h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className='icon'/>
              <span className="name">
                {location}
              </span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>{grade}</span>
              </div>
              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>

            <div className="desc">
              <p>{description}</p>
            </div>

            <button className='btn flex'>
              Details <HiOutlineClipboardCheck className='icon' />
            </button>


          </div>
        
        </div>
      )
     }    
    )

  )  
}