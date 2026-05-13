import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
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

              <li className='list-group-item d-flex justify-content-between align-items-center'>

                <div>
                  <h6 className='mb-1'>
                    Ruslan
                  </h6>

                  <small>
                    Russss1@gmail.com
                  </small>
                </div>
                <div className='text-end'>
                  <span className='badge bg-primary'>
                    User
                  </span>
                  <p className='mb-0 mt-2 text-success'>
                    Active
                  </p>

                </div>


              </li>

              <li className='list-group-item d-flex justify-content-between align-items-center'>

                <div>
                  <h6 className='mb-1'>
                    Dmitry
                  </h6>

                  <small>
                    Dmitry.Js-31@gmail.com
                  </small>
                </div>
                <div className='text-end'>
                  <span className='badge bg-primary'>
                    Admin
                  </span>
                  <p className='mb-0 mt-2 text-success'>
                    Active
                  </p>

                </div>


              </li>

              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <div>
                  <h6 className='mb-1'>
                    Bob Marley
                  </h6>

                  <small>
                    BobM@gmail.com
                  </small>
                </div>
                <div className='text-end'>
                  <span className='badge bg-primary'>
                    Editor
                  </span>
                  <p className='mb-0 mt-2 text-danger'>
                    Not active
                  </p>

                </div>


              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  )
};

export default App;