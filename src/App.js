
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AdminDashboard from './Pages/Admin/AdminDashboard';



function App() {
  return (
    <>
       <Router>
           <Routes>
             <Route path='/' Component={Home}/>
             <Route path='/login' Component={Login}/>
           </Routes>
            <AdminDashboard/>
       </Router>
       
    </>
      
  );
}

export default App;
