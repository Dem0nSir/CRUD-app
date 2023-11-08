
import Create from "./components/Create"
import Header from "./components/HEader"
import Home from "./components/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Update from "./components/Update"
function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes> 
    </BrowserRouter>
    
  )
}

export default App
