import { Routes,Route } from "react-router"
import Home from "./Pages/Home"

function App() {
 

  return (
    <div className="w-full h-full flex overflow-hidden">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
