import React from 'react'
import Swal from 'sweetalert2';

export default function Status({tickets, setTickets}) {
  
  const handleTaskClick = (id) => {
    const setTaskCompleted = (prev) => prev.map(ticket=>ticket.id === id ? {...ticket, status: "Completed"} : ticket);
    setTickets(setTaskCompleted);
    console.log(tickets);
    const ticket = tickets.find(ticket => ticket.id === id);
    Swal.fire({
      title: ticket? `"${ticket.title}" is Resolved!`:  "",
      icon:"success"
    });
  }

  return (
    <>
   <div className="flex flex-col gap-10">
  <div className="flex flex-col">
  <p className="text-xl font-bold">Task Status</p>
  <div className="flex flex-col space-y-4">

  {tickets.filter(ticket => ticket.status === "In-Progress").length > 0 ? (
    tickets.filter(ticket => ticket.status === "In-Progress").map(({ id, title }) => (
        <div key={id} className="flex flex-col gap-2 w-full rounded-md p-4 overflow-hidden bg-gray-100">
          <p className="whitespace-nowrap text-left w-full">{title}</p>
          <button
            className="btn btn-success w-full"
            onClick={() => handleTaskClick(id)}
          >
            Complete
          </button>
        </div>
      ))) : 
      (
    <p>Select a ticket to add to Task Status</p>
      )}

  </div>
</div>
<div className="flex flex-col">
  <p className="text-xl font-bold">Resolved Task</p>
  
  <div className="flex flex-col space-y-4">

  {tickets.filter(ticket => ticket.status === "Completed").length > 0 ? (
    tickets.filter(ticket => ticket.status === "Completed").map(({ id, title }) => (
        <div key={id}>
        <div className="bg-[#e0e7ff] p-2 whitespace-nowrap">{title}</div>
        </div>
      ))
  ) : (
    <p>No resolved tasks yet.</p>
  )}

  </div>
</div>
  </div> 
    </>
  )
}
