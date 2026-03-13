import React from 'react'

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-left md:items-center gap-4 md:gap-1 m-5 md:m-1">

      <h1 className ="font-bold md:text-md text-3xl">CS - Ticket System</h1>
      <div className="md:text-md text-lg flex items-left md:items-center gap-6 flex-col-reverse md:flex-row">
        <div className="flex gap-4 flex-col md:flex-row ">
          <p>Home</p>
          <p>FAQ</p>
          <p>Changelog</p>
          <p>Blog</p>
          <p>Download</p>
          <p>Contact</p>
        </div>
        <button className="bg-linear-to-r from-customerviolet-first to-customerviolet-last px-5 py-3 text-white rounded-sm font-bold">
          + New Ticket
        </button>
      </div>


    </div>

    </div>

  )
}
