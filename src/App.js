import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home'
import Philosophy from "./pages/Philosophy/Philosophy"
import Contacts from "./pages/Contacts/Contacts"
import Assignment from "./pages/Assignment/Assignment"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/philosophy' element={<Philosophy/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
