import type { Props } from "../../type";
import UserItem from '../UserItem/UserItem.tsx'

type UsersProps = {
  users: Props[]
}

const Users = ({ users }: UsersProps) => {
  return (
    <ul className='list-group'>
      <div className='card p-4'>
        <h4 className='mb-4'>
          Users
        </h4>
        {
          users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
            />
          ))
        }
      </div>

    </ul>
  )
}

export default Users