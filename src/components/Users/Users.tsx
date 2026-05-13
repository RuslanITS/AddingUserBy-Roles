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
          <h4 className={'text-center'}>No users yet
            <i className='bi bi-people ms-2'></i>
          </h4>
        ) : (
          <>
            <h4 className='mb-4'>
              Users
              <i className='bi bi-person'></i>
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