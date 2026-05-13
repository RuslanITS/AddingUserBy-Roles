import type { Props } from "../../type";
import UserItem from '../UserItem/UserItem.tsx'

type UsersProps = {
  users: Props[]
}

const Users = ({ users }: UsersProps) => {
  return (
    <div className='card p-4'>

      {
        users.length === 0 ? (
          <h4>No users yet</h4>
        ) : (
          <>
            <h4 className='mb-4'>
              Users
            </h4>

            <ul className='list-group'>

              {
                users.map((user) => (
                  <UserItem
                    key={user.id}
                    user={user}
                  />
                ))
              }

            </ul>
          </>
        )
      }

    </div>
  )
}

export default Users