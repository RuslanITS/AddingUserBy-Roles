const UserForm = () => {
  return (
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
            id='name'
            type='text'
            className='form-control'
            placeholder='Name'
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
            id='email'
            type='email'
            className='form-control'
            placeholder='Email'
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
  )
}

export default UserForm