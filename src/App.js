import "./Login/Login.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./Login/LoginForm";
import UserDashboard from "./UserDashboard/index";
import Add from "./StudentTable/Add";
import Edit from "./StudentTable/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/userdashboard" element={<UserDashboard />}></Route>
          <Route path="/create" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
