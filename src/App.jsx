
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Dashboard from './app/Dashboard';
import Login from './app/Login';
import SignUp from './app/SignUp';
import Verification from './app/Login/Verification';
// import Addproduct from './app/Add Product/Addproduct';
import AddPage from './app/Add Product/AddPage';
import Steper from './app/Dashboard/Steps';
import Notification from './app/Notification';
import Chat from './app/Chat';
import Previous from './app/Previous';
import Recent from './app/Recent';
import ChatModule from './app/Chat/ChatModule';
import DetailCar from './app/Detail page';
function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Login/>} />
<Route exact path='/Verification' element={<Verification/>} />
<Route exact path='/Dashbord' element={<Dashboard/>} />
<Route exact path='/DetailCar' element={<DetailCar/>} />
<Route exact path='/SignUp' element={<SignUp/>} />
<Route exact path='/Notification' element={<Notification/>} />
<Route exact path='/Add' element={<AddPage/>} />
<Route exact path='/Chat' element={<Chat/>} />
<Route exact path='/Previous' element={<Previous/>} />
<Route exact path='/Recent' element={<Recent/>} />
<Route exact path='/Chat/admin' element={<ChatModule/>} />
<Route exact path='/Add/Car' element={<Steper/>} />

</Routes>

</BrowserRouter>
    </>
  )
}

export default App
