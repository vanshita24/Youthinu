import Main from '~/layouts/main';
import { MainFooter } from '~/components/Footers';
import '../styles/Home.module.css';
import { useState } from 'react';

export default function Search(props) {
  const [expand, setExpand] = useState(false);

  return (
    <Main>
      <h1 className='text-purple-600  text-4xl font-headline font-sans font-extrabold flex justify-start mt-20'>
        Find Classes
      </h1>
      <div className='bg-gray-100'>
        <div className='container h-48 flex flex-col justify-center items-center mt-3 border-b-2  border-solid border-gray-200'>
          <div className='relative'>
            <div className='absolute top-4 left-3'>
              <svg
                class='w-6 h-6 absolute'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='none'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </div>
            <input
              type='text'
              class='h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
              placeholder='Any topic or teacher'></input>
            <div className='absolute top-2 right-2'>
              <button class='h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600'>
                Search
              </button>
            </div>
          </div>
          <div className='flex justify-center mb-6 mt-5 '>
            <div className='inline-block relative min-w-48 '>
              <button
                className='bg-white text-blue-600 font-semibold text-lg p-2 rounded inline-flex justify-between w-48 border border-solid border-blue-500'
                onClick={() => setExpand((_expand) => !_expand)}>
                <span className='ml-3 '>Any Age</span>
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
                        <input className='h-3 w-3' type='checkbox' id='age1' />
                        <label for='age1'>6-8 yrs </label>
                        <br></br>
                        <input type='checkbox' id='age1' />
                        <label for='age1'>8-12 yrs </label>
                        <br></br>
                        <input type='checkbox' id='age1' />
                        <label for='age1'>13-17 yrs </label>
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

            <div className='inline-block relative min-w-48 '>
              <button
                className='bg-white text-blue-600 font-semibold text-lg p-2 rounded inline-flex justify-between w-48 border border-solid border-blue-500'
                onClick={() => setExpand((_expand) => !_expand)}>
                <span className='ml-3 '>Any Price</span>
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
                        <input className='h-3 w-3' type='checkbox' id='age1' />
                        <label for='age1'>Any </label>
                        <br></br>
                        <input type='checkbox' id='age1' />
                        <label for='age1'>$9 or less </label>
                        <br></br>
                        <input type='checkbox' id='age1' />
                        <label for='age1'>$15 or less </label>
                        <br></br>
                        <input type='checkbox' id='age1' />
                        <label for='age1'>More than $15</label>
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
          </div>
        </div>

        <div className='flex'>
          <p className='text-gray-500 text-xl'>Topics: </p>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Logical Math
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Coding
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Art
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Science
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Technology
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Engineering
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Maths
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Tamil
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            French
          </button>
          <button
            class='text-blue-400 bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'>
            Sanskrit
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <MainFooter />
    </Main>
  );
}
