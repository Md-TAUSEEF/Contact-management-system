import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Component2/Home";
import About from "./Component2/About";
import Contect from "./Component2/Contact";
import Service from "./Component2/Service";
import Navbar from "./Component1/Navbar";
import Registor from "./Component2/Registor";
import LoginPage from "./Component2/LoginPage";
import Errorpage from "./Component2/Errorpage";
import { Logout } from "./Component2/Logout";
import Admin_Navbar from "./Component1/Admin_Navbar";
import Admin_users from "./Component2/Admin_users";
import Admin_contact from "./Component2/Admin_contact";
import Admin_Edit from "./Component1/Admin_Edit";
import TaskList from "./Component2/TaskList"
import TaskForm from "./Component2/TaskForm";


function App() {
  
  return (<>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contect/>}/>
      <Route exact path="/service" element={<Service/>}/>
      <Route exact path="/registor" element={<Registor/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/logout" element={<Logout/>}/>
      <Route exact path="*" element={<Errorpage/>}/>
      
      <Route exact path="/tasks" element={<TaskList />} />
      <Route exact path="/taskform" element={<TaskForm/>} />

     <Route exact path="/admin" element={<Admin_Navbar/>}>
     <Route exact path="users" element={<Admin_users/>}/>
     <Route exact path="contacts" element={<Admin_contact/>}/>
     <Route exact path="/admin/users/:id/edit" element={<Admin_Edit/>}/>


     </Route>


  
      
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
