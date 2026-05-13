import { toast } from 'react-toastify'
import { type ChangeEvent, type SubmitEvent, useState } from "react";
import type { Props } from "../../type";

type UserFormProps = {
  addUser: (user: Props) => void
}

const UserForm = ( { addUser }: UserFormProps ) => {

  const [formData, setFormData] = useState<Props>({
    name: '',
    email: '',
    active: false,
    role: '',
    id: ''
  })

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    const newUser = {
      ...formData,
      id: crypto.randomUUID()
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.role
    ) {
      toast.error('\n' +
        'You have not filled in the field')

      return
    }

    setFormData({
      name: '',
      email: '',
      active: false,
      role: 'user',
      id: ''
    })

    addUser(newUser)
    toast.success('User added successfully')
  }

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value, type } = event.target

    setFormData((prevState) => ({
      ...prevState,

      [name]:
        type === 'checkbox'
          ? (event.target as HTMLInputElement).checked
          : value
    }))
  }

  return (
    <div className='card p-4 shadow-sm'>

      <form onSubmit={handleSubmit}>

        <h4 className='mb-4'>
          Add user
          <i className="bi bi-person-plus-fill ms-2"></i>
        </h4>

        <div className='mb-3'>
          <label
            htmlFor='name'
            className='form-label'
          >
            Name
            <i className="bi bi-person-vcard-fill ms-2"></i>
          </label>

          <input
            name={'name'}
            id='name'
            type='text'
            value={formData.name}
            className='form-control'
            placeholder='Name'
            onChange={onChangeHandler}
          />
        </div>

        <div className='mb-3'>
          <label
            htmlFor='email'
            className='form-label'
          >
            Email
            <i className='bi bi-envelope ms-2'></i>
          </label>

          <input
            name={'email'}
            id='email'
            type='email'
            value={formData.email}
            className='form-control'
            placeholder='Email'
            onChange={onChangeHandler}
          />
        </div>

        <div className='form-check mb-3'>

          <input
            name={'active'}
            id='active'
            type='checkbox'
            checked={formData.active}
            className='form-check-input'
            onChange={onChangeHandler}
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
            onChange={onChangeHandler}
            name={'role'}
            value={formData.role}
            id='role'
            className='form-select'
          >
            <option value='' disabled>
              Choose role
            </option>

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
          <i className='bi bi-pencil-square ms-2'></i>
        </button>

      </form>

    </div>
  )
}

export default UserForm