import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Alert from './components/Alert'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastrar' element={<Register/>}/>
        <Route path='/alert' element={<Alert/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
