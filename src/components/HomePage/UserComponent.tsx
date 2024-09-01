import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addUser, removeUser } from '../../app/features/users/usersSlice'

const UserComponent = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name,
      email,
    }
    dispatch(addUser(newUser))
  }

  const handleRemoveUser = (id: number) => {
    dispatch(removeUser(id))
  }
const custom=`flex w-full flex-col gap-y-5 mt-5`
  return (
    <section className={custom}>
      <h2 className='text-3xl font-bold text-center'>Users</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
         className='bg-blue-200 py-5 rounded-md text-3xl placeholder-gray-400 text-center'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className='bg-blue-200 py-5 rounded-md placeholder-gray-400 text-3xl text-center'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser} className='bg-gray-400 font-bold text-2xl py-5 rounded-md'>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) 
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UserComponent
