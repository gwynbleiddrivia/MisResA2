import React, { useState } from 'react'

export default function TicketGrid({tickets, setTickets}) {
  
  const handleTicketClick = (id) => {
    const newTickets = (prev) => prev.map(ticket=>ticket.id === id ? {...ticket, status: "In-Progress"} : ticket);
    setTickets(newTickets);
    //console.log(tickets);
  }

  return (
    <>
    <div className="flex flex-col">

    <div>Customer Tickets</div>
    <div className="grid grid-cols-2 gap-5">
      {tickets.filter(ticket => ticket.status !== "Completed").map(({id, title, taskStatus})=>(
        <button 
          key={id} 
          className="btn w-64 rounded-full"  
          onClick={()=>{
            handleTicketClick(id)
        }}>
          {title}
          </button>
      ))}
    </div>
    </div>
    </>
  )
}
