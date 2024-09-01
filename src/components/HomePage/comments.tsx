import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addComment } from '../../app/features/comments/commentsSlice';

const AddComment: React.FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const handleAddComment = () => {
    const newComment = {
      id: Date.now(), // Generate a unique ID
      text,
      author,
      date,
    };
    dispatch(addComment(newComment));
    setText('');
    setAuthor('');
    setDate('');
  };

  return (
    <div className='grid place-content-center  m-auto gap-8  min-h-screen'>
        <div className='w-full flex justify-between gap-5'>
             <input
        type="text"
        placeholder="Comment text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='bg-blue-300 text-center p-5 rounded-md placeholder-black text-xl'
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
       className='bg-blue-300 text-center p-5 rounded-md placeholder-black text-xl'
      />
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
       className='bg-blue-300 text-center p-5 rounded-md placeholder-black text-xl'
      />
        </div>
     
      <button onClick={handleAddComment} className='bg-blue-300 text-center p-5 rounded-md text-2xl text-black font-bold '>Add Comment</button>
    </div>
  );
};

export default AddComment;
