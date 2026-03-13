import React, { useState } from 'react'

export default function Banner({tickets, setTickets}) {

  const progressTicketsLength = tickets.filter(ticket => ticket.status == "In-Progress").length;
  const resolvedTicketsLength = tickets.filter(ticket => ticket.status == "Completed").length;

  return (
    <>
      <div className="flex flex-col md:flex-row  gap-3 w-full items-center justify-between mb-5">
        <div className="bg-linear-to-r from-customerviolet-first to-customerviolet-last flex items-center justify-center w-full overflow-hidden">
          <img src="./src/assets/vector1.png" className="" alt="" />
          <div className="flex flex-col items-center text-white">

            <p className="text-xl whitespace-nowrap">In-Progress</p> 
            <p className="text-5xl font-bold">{progressTicketsLength}</p>
          </div>
          <img src="./src/assets/vector1.png" className="transform scale-x-[-1]" alt="" />

           
        </div>
        <div className="bg-linear-to-r from-customergreen-first to-customergreen-last flex items-center justify-center w-full overflow-hidden">
          <img src="./src/assets/vector1.png" className="" alt="" />
          
          <div className="flex flex-col gap-3 items-center text-white">

          <p className="text-xl">Resolved</p>
          <p className="text-5xl font-bold">{resolvedTicketsLength}</p>

          </div>
          <img src="./src/assets/vector1.png" className="transform scale-x-[-1]" alt="" />
        </div>

      </div>
    </>
  )
}
