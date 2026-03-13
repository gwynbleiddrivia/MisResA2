import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col bg-black p-12 w-full">
      <div className="flex md:flex-row flex-col w-full justify-between gap-5">
        <div className="flex flex-col text-left">
          <h1 className="text-2xl text-white mb-3">CS Ticket System</h1>
          <p className="text-gray-100 text-sm">
CS Ticket System helps teams track and resolve customer issues in a simple, organized way. Agents can create, update, and prioritize tickets so no request gets lost. The system keeps conversations and status updates in one place, making support faster and easier to manage.
          </p>
        </div>
        <div className="flex flex-col text-left text-white">

          <h1 className="text-2xl mb-3">Company</h1>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Sailed</p>
        </div>
        <div className="flex flex-col text-left text-white">

          <h1 className="text-2xl text-white mb-3">Information</h1>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </div>
        <div className="flex flex-col text-left text-white">

          <h1 className="text-2xl text-white mb-3">Social Links</h1>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Support</p>
        </div>
        
      </div>
      <div>
        <div className="w-full h-px bg-gray-100 my-3"></div>
      </div>
      <div className="items-center text-white"> 
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </div>
  )
}
