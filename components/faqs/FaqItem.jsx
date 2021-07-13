import { useState } from 'react';

export default function FaqItem() {
  const [expand, setExpand] = useState(false);

  return (
    <div className='inline-block relative min-w-full'>
      <button
        className='bg-gray-300 text-gray-700 font-semibold p-2 rounded inline-flex justify-between min-w-full'
        onClick={() => setExpand((_expand) => !_expand)}>
        <span className='ml-3 '>What is yiu academy ?</span>
        <svg
          className='fill-current h-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </button>
      <ul
        className='text-gray-700 transition-height duration-1000 ease-in-out overflow-hidden'
        style={expand ? { height: '0px' } : { height: 'auto' }}>
        <li>
          <a
            className='bg-gray-200 px-2 py-2 block whitespace-no-wrap'
            href='#'>
            Yiuacademy is a marketplace and online learning portal for kids aged
            2 till 22. We help parents find great classes for their kids. And we
            help teachers to promote their classes to parents. We offer both
            recorded video classes and live classes from teachers.
          </a>
        </li>
      </ul>
    </div>
  );
}
