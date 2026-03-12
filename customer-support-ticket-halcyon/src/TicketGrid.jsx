import React, { useState } from 'react'
import ticketsData from './data/ticketsData'
 


export default function TicketGrid() {
  return (
    <>
    <div className="flex flex-col">

    <div>Customer Tickets</div>
    <div className="grid grid-cols-2 gap-5">
      {ticketsData.filter(ticket => ticket.ticketGrid).map(({id, title})=>(
        <button key={id} className="btn w-64 rounded-full">{title}</button>
      ))}
    </div>
    </div>
    </>
  )
}
