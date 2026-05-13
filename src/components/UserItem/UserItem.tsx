import type { Props } from "../../type";

type UserItemProps = {
  user: Props
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center'
    >

      <div>
        <h5 className='mb-1'>
          {user.name}
        </h5>

        <span>
          {user.email}
          <i className='bi bi-envelope ms-2'></i>
        </span>
      </div>

      <div className='text-end'>

        <span  className={
          user.role === 'admin'
            ? 'badge bg-danger bi bi-shield-lock'
            : user.role === 'editor'
              ? 'badge bg-dark'
              : 'badge bg-primary'
        } >
          {user.role}
        </span>

        <p
          className={
            user.active
              ? 'mb-0 mt-2 text-success'
              : 'mb-0 mt-2 text-danger'
          }
        >
          {
            user.active
              ? 'Active'
              : 'Not active'
          }
          <i className='bi bi-check-circle-fill ms-2'></i>
        </p>

      </div>

    </li>
  )
}

export default UserItem