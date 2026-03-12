import React, { useState } from 'react'

export default function Banner({tickets, setTickets}) {

  const progressTicketsLength = tickets.filter(ticket => ticket.status == "In-Progress").length;
  const resolvedTicketsLength = tickets.filter(ticket => ticket.status == "Completed").length;

  return (
    <>
      <div className="flex gap-2 items-center justify-between gap-5">
        <div className="flex flex-col items-center text-white bg-linear-to-r from-customerviolet-first to-customerviolet-last p-10">
           <p className="">In-Progress</p> 
          <p className="">{progressTicketsLength}</p>
        </div>
        <div className="flex flex-col items-center text-white bg-linear-to-r from-customergreen-first to-customergreen-last p-10"> 
          <p className="">Resolved</p>
          <p className="">{resolvedTicketsLength}</p>
        </div>

      </div>
    </>
  )
}
