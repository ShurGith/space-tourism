import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Crew from "./Components/Crew"
import Destination from "./Components/Destination"
import Tecnology from "./Components/Tecnology"
import Header from "./Components/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tecnology" element={<Tecnology />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
