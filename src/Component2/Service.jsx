import React from 'react'
import "./Service.css"
import Homeimg from "../Component1/images/home.png";
import { useAuth } from './Storetoken/auth_token';

export default function Service() {

  const {services}=useAuth();
  return (
    <section className='service_container'>
      <div className='container'>
        <h1 className='main_heading'>services</h1>
      </div>

      <div className='service_mid'>

      {

        services.map((curElem, index)=>{

          return(
          <div className='service_card' key={index}>
          <div className='card_img'>
          <img
            src={Homeimg}
            alt="this is come page image"
            style={{ width: 270, height: 290 }}
          />
          </div>
          <div className='card_details'>
          <div className='card_details_mid'>
              <p>{curElem.provider}</p>
              <p>{curElem.price}</p>
          </div>
          <h2>{curElem.service}</h2>
          <p>{curElem.description}</p>


          </div>
        </div>);
        })
      }
       
      </div>
    </section>
  )
}
