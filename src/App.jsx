
import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div>
        <BrowserRouter>
            <Routes>
              <Route path='/HomeProject/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
