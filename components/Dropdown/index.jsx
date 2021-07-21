import { useState } from 'react';

export default function Dropdown({ post }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className='inline-block w-auto '>
      <button
        className='bg-white text-brand-purple-light font-semibold text-lg p-2 rounded inline-flex justify-between w-48 border border-solid border-blue-500 '
        onClick={() => setExpand((_expand) => !_expand)}>
        <span className='ml-3 '>{post.filter}</span>
        <svg
          className='fill-current h-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </button>
      <ul
        className='text-gray-700 text-xl transition-height duration-1000 ease-in-out overflow-hidden'
        style={!expand ? { height: '0px' } : { height: 'auto' }}>
        <li>
          <div className='bg-gray-200 px-2 py-2 block whitespace-no-wrap text-xl'>
            <div>
              <form action='#'>
                <input
                  className='h-3 w-3'
                  type='checkbox'
                  id={post.filter + post.id}
                />
                <label for={post.filter + post.id}>{post.cat1}</label>
                <br></br>
                <input
                  className='h-3 w-3'
                  type='checkbox'
                  id={post.filter + post.id}
                />
                <label for={post.filter + post.id}>{post.cat2}</label>
                <br></br>
                <input
                  className='h-3 w-3'
                  type='checkbox'
                  id={post.filter + post.id}
                />
                <label for={post.filter + post.id}>{post.cat3}</label>
                <br></br>
                <input
                  className='h-3 w-3'
                  type='checkbox'
                  id={post.filter + post.id}
                />
                <label for={post.filter + post.id}>{post.cat4}</label>
                <br></br>
                <input
                  className='h-3 w-3'
                  type='checkbox'
                  id={post.filter + post.id}
                />
                <label for={post.filter + post.id}>{post.cat5}</label>
                <br></br>

                <input
                  type='submit'
                  value='Apply Changes'
                  className='h-10 w-40 text-white rounded-lg bg-brand-green-light hover:bg-green-200 '
                />
              </form>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
