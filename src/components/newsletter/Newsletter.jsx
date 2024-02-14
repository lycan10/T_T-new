import React from 'react'
import "./newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>NEWSLETTER</h1>
        <p>Please sign up to the Market mailing list to receive updates on special offers and other discount information</p>
        <input type="text" name="" placeholder='Your email address'/>
        <button>SUBSCRIBE</button>
    </div>
  )
}

export default Newsletter