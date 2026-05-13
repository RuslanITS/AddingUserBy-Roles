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
        <h6 className='mb-1'>
          {user.name}
        </h6>

        <small>
          {user.email}
        </small>
      </div>

      <div className='text-end'>

        <span className='badge bg-primary'>
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
        </p>

      </div>

    </li>
  )
}

export default UserItem