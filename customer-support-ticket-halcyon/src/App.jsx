import './App.css'
import Header from './Header'
import Footer from './Footer'
import MainSection from './MainSection'
import Banner from './Banner'
function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">

     <Header/>
     <Banner/>
     <MainSection/>
     <Footer/>



    </div>
    </>
  )
}

export default App
