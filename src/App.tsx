import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from "react";

const App = () => {

  const [users] = useState([
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
          <div className='card p-4 shadow-sm'>
            <form>
              <h4 className='mb-4'>
                Add user
              </h4>
              <div className='mb-3'>
                <label
                  htmlFor='name'
                  className='form-label'
                >
                  Name
                </label>
                <input
                  placeholder='Name'
                  id='name'
                  type='text'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='form-label'
                >
                  Email
                </label>
                <input
                  placeholder='Email'
                  id='email'
                  type='email'
                  className='form-control'
                />
              </div>
              <div className='form-check mb-3'>
                <input
                  id='active'
                  type='checkbox'
                  className='form-check-input'
                />
                <label
                  htmlFor='active'
                  className='form-check-label'
                >
                  Active
                </label>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='role'
                  className='form-label'
                >
                  Choose role
                </label>
                <select
                  id='role'
                  className='form-select'
                >
                  <option value='user'>
                    User
                  </option>
                  <option value='editor'>
                    Editor
                  </option>
                  <option value='admin'>
                    Admin
                  </option>
                </select>

              </div>

              <button
                type='submit'
                className='btn btn-primary w-100'
              >
                Add user
              </button>

            </form>

          </div>

        </div>

        <div className='col-8'>

          <div className='card p-4  '>

            <h4 className='mb-4'>
              Users
            </h4>

            <ul className='list-group'>

              {
                users.map((user) => (
                  <li
                    key={user.id}
                    className='list-group-item d-flex justify-content-between align-items-center'>
                    <div>
                      <h6 className={'mb-1'}>{user.name}</h6>
                      <small>{user.email}</small>
                    </div>
                    <div className='text-end'>
                      <span className='badge bg-primary'>
                        {user.role}
                      </span>
                      <p className={
                        user.active
                          ? 'mb-0 mt-2 text-success'
                          : 'mb-0 mt-2 text-danger'
                      }>
                        {user.active
                          ? 'Active'
                          : 'Not active'}
                      </p>
                    </div>
                  </li>
                ))
              }

            </ul>

          </div>

        </div>

      </div>

    </div>
  )
};

export default App;