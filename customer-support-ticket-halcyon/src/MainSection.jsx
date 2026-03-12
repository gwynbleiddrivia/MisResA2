import React, { useState } from 'react'
import ticketsData from './data/ticketsData'
import TicketGrid from './TicketGrid'
import Status from './Status'


export default function MainSection() {
  return (
    <div className="flex justify-evenly w-full">
        <TicketGrid/>
        <Status/>
    </div>
  )
}
