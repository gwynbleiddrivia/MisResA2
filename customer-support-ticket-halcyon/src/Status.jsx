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
   <div className="flex flex-col">
    <div className="flex flex-col">
      <p className="">Task Status</p>
      
      {tickets.filter(ticket=>ticket.status==="In-Progress").map(({id, title}) =>
     <div key={id}>

      {title}
      <button className="btn btn-success" onClick={()=>{
        handleTaskClick(id)
      }}>Complete Task</button>

     </div>
      )}

    </div>
    <div className="flex flex-col">
      <p className="">Resolved Task</p>
            {tickets.filter(ticket=>ticket.status==="Completed").map(({id, title}) =>
     <div key={id}>

      {title}

     </div>
      )}
    </div>
  </div> 
    </>
  )
}
