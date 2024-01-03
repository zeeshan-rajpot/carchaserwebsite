
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
// import Dashboard from './app/Dashboard';
import Login from './app/Login';
import SignUp from './app/SignUp';
import Verification from './app/Login/Verification';

function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Login/>} />
<Route exact path='/Verification' element={<Verification/>} />

<Route exact path='/SignUp' element={<SignUp/>} />

{/* <Route exact path='/Dashboard' element={<Dashboard/>} /> */}


</Routes>

</BrowserRouter>
    </>
  )
}

export default App
