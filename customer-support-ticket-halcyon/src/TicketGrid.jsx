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

    <div className="text-xl font-bold mb-2">Customer Tickets</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {tickets.filter(ticket => ticket.status !== "Completed").map(({id, title, description, customer, priority, status, createdAt})=>(
        <div 
          key={id} 
          className="btn w-full rounded-md p-12 overflow-hidden"  
          onClick={()=>{
            handleTicketClick(id)
        }}>



            <div id="Ticket Card Design" className="flex flex-col">
              <div className="flex justify-between w-full">
                <p className="text-md">{title}</p>
                <div className={`${status === "Open"?"bg-[#b9f8cf] text-[#0b5e06]":"bg-[#f8f3b9] text-[#9c7700]"} rounded-md px-2 py-1 whitespace-nowrap`}>{status}</div>
                
              </div>
              <div className="text-gray-500 text-sm text-left w-full">{description}</div>
              <div className="flex justify-between w-full gap-12">
                <div className="flex justify-between gap-2">
                  <p className="">#{id}</p>
                  <p className={`whitespace-nowrap ${priority==="HIGH PRIORITY"?"text-[#f83044]"
                    :priority==="MEDIUM PRIORITY"?"text-[#febb0c]"
                    :priority==="LOW PRIORITY"?"text-[#02a53b]":"text-gray-500"
                  }`}>{priority}</p>
                  
                  </div>
                <div className="flex justify-between gap-2">
                  <p className="text-gray-700 whitespace-nowrap">{customer}</p> 
                  <p className="font-light text-gray-700 whitespace-nowrap">{createdAt}</p> 
                </div>
              </div>

            </div>



          </div>
        

      ))}
    </div>
    </div>
    </>
  )
}
