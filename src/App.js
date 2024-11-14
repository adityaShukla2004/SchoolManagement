
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AddStudent from './Components/AddStudent';
import AddTeacher from './Components/AddTeacher';
import AddNotice from './Components/AddNotice';
import AllStudens from './Pages/Admin/AllStudens';



function App() {
  return (
    <>
       <Router>
           <Routes>
             <Route path='/' Component={Home}/>
             <Route path='/login' Component={Login}/>
             <Route path='/admin' Component={AdminDashboard}/>
             <Route path='/addstudent' Component={AddStudent}/>
             <Route path='/addteacher' Component={AddTeacher}/>
             <Route path='/addnotice' Component={AddNotice}/>
             <Route path='/allstudent' Component={AllStudens}/>

           </Routes>
           
       </Router>
       
    </>
      
  );
}

export default App;
