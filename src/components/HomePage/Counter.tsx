import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addPost } from '../../app/features/counter/counterSlice'

const MyComponent = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts)

  const handleAddPost = () => {
    dispatch(addPost({ id: 1, title: 'New Post' }))
  }

  return (
    <div>
      <button onClick={handleAddPost} className='text-2xl bg-gray-500 w-full p-5 rounded-md font-bold text-white'>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default MyComponent
 