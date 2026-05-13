import UserForm from "./components/UserForm/UseForm.tsx";
import type { Props } from "./type";
import Users from './components/Users/Users.tsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { useState } from "react";

const App = () => {

  const [users, setUsers] = useState<Props[]>([])

  const addUser = (newUser: Props) => {
    setUsers((prev) => [...prev, newUser])
  }

  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-4'>
          <UserForm addUser={addUser} />
        </div>

        <div className='col-8'>
          <Users users={users} />
        </div>

      </div>
      <ToastContainer />
    </div>
  )
};

export default App;