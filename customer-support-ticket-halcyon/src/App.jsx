import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import MainSection from './MainSection'
import Banner from './Banner'
import ticketsData from './data/ticketsData'


function App() {
  const [tickets, setTickets] = useState(ticketsData);
  return (
    <>
    <div className="flex flex-col items-center h-screen">

     <Header/>
     <Banner tickets={tickets} setTickets={setTickets}/>
     <MainSection tickets={tickets} setTickets={setTickets}/>
     <Footer/>



    </div>
    </>
  )
}

export default App
