import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <p>Phone: 888-999-000-1425</p>
          <p>Email: azedev@mail.com</p>
          <p>Address: 22/1 National City, Austria, Dream Land, Huwai</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Best services</li>
            <li>Recent insight</li>
            <li>Shipping guide</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">PAYMENT & SHIPPING</h3>
          <ul className="space-y-2">
            <li>Payment method</li>
            <li>Terms of use</li>
            <li>Shipping policy</li>
            <li>Shipping guide</li>
            <li>Return policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
          <ul className="space-y-2">
            <li> tryinstagram</li>
            <li> tryfacebook</li>
            <li> trytwitter</li>
            <li> trywhatsapp</li>
          </ul>
        </div>
      </div>
    </footer></>
  )
}

export default Footer