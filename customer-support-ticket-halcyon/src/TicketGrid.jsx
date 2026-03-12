import React, { useState } from 'react';
import Swal from 'sweetalert2';


export default function TicketGrid({tickets, setTickets}) {
  const handleTicketClick = (id) => {
    const newTickets = tickets.map(ticket=>ticket.id === id ? {...ticket, status: "In-Progress"} : ticket);
    setTickets(newTickets);
    const ticket = tickets.find(ticket => ticket.id === id);
    Swal.fire({
      title: ticket? `"${ticket.title}" is In-Progress`:  "",
      icon:"success"
    });

   
  //console.log(tickets);
  };
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
