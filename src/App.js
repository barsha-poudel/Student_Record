import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Login/LoginForm';
import UserDashboard from './UserDashboard/Dashboard';
import Add from './TableComp/Add';

function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
    <Route path= '/' element={<LoginForm/>}></Route>
    <Route path= '/userdashboard' element={<UserDashboard/>}></Route>
    <Route path= '/create' element={<Add/>}></Route>
  </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
