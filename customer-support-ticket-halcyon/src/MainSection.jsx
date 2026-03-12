import React, { useState } from 'react'
import TicketGrid from './TicketGrid'
import Status from './Status'


export default function MainSection({tickets, setTickets}) {
  return (
    <div className="flex justify-evenly w-full">
        <TicketGrid 
          tickets={tickets}
          setTickets={setTickets}
          />
        <Status 
          tickets={tickets} 
          setTickets={setTickets}
        />
    </div>
  )
}
