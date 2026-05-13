import UserForm from "./components/UserForm/UseForm.tsx";
import type { Props } from "./type";
import Users from './components/Users/Users.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from "react";

const App = () => {

  const [users] = useState<Props[]>([
    {
      id: 1123123,
      name: 'Ruslan',
      email: 'Russss1@gmail.com',
      active: true,
      role: 'User'
    },
    {
      id: 232534,
      name: 'Dmitry',
      email: 'Dmitry@gmail.com',
      active: true,
      role: 'Admin'
    },
    {
      id: 3574687,
      name: 'Bob Marley',
      email: 'BobMarley@gmail.com',
      active: false,
      role: 'Editor'
    }
  ])

  return (
    <div className='container mt-5'>

      <div className='row'>

        <div className='col-4'>
          <UserForm />
        </div>

        <div className='col-8'>
          <Users users={users} />
        </div>

      </div>

    </div>
  )
};

export default App;