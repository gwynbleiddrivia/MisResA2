import React from 'react'


export default function Status({tickets, setTickets, progressCounter, resolvedCounter,  setProgressCounter, setResolvedCounter}) {
  
  const handleTaskClick = (id) => {
    const setTaskCompleted = (prev) => prev.map(ticket=>ticket.id === id ? {...ticket, status: "Completed"} : ticket);
    setTickets(setTaskCompleted);
    console.log(tickets);
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
