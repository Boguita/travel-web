import React,{useEffect} from 'react';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai';
import video_footer from '../../assets/video_footer.mp4'
import './footer.css';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {
   useEffect(() =>{
    Aos.init({duration: 2000})
  },[]
 )
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video_footer} loop autoPlay muted 
        type="video/mp4"></video>
      </div>

      <div className="secContent conatiner">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel whit us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="mail" placeholder='Enter Email Addres' />
            <button data-aos="fade-up" className='btn flex'>
             SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
      

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
             <MdOutlineTravelExplore className='icon' /> Travel.
            </a>
          </div>

          <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, hic, odit amet voluptates aliquam suscipit corporis, incidunt quis similique animi maiores vitae modi beatae laboriosam sint fuga distinctio nesciunt ducimus?
          </div>

          <div data-aos="fade-up" className="footerSocials flex">
            <AiOutlineTwitter className="icon" /> 
            <AiFillYoutube className="icon" /> 
            <AiFillInstagram className="icon" /> 
            <FaTripadvisor className="icon" /> 
          </div>
        </div>

        <div className="footerLinks grid">

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
            </li>
            
             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
            </li>

          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Booking
            </li>
            
             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rent Cars
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Hostel World
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>

          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Buenos Aires
            </li>
            
             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              California
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bogota
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Toronto
            </li>

             <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Punta del Este
            </li>

          </div>
        </div>

        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED BOGUITA 2023</small>          
        </div>

      </div>
    </div>

    </section>
  )
}
