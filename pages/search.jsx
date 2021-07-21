import Main from '~/layouts/main';

import '../styles/Home.module.css';
import Dropdown from '../components/Dropdown';
import data from '../mock/filter.json';
import Data from '../mock/searchCourses.json';

export default function Search({ posts }) {
  return (
    <Main>
      <h1 className='text-purple-600  text-4xl font-headline font-sans font-extrabold flex justify-start mt-20'>
        Find Classes
      </h1>
      <div className='bg-gray-100 flex flex-col justify-center w-full max-width-screen-2xl h-80'>
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
            {posts.map((post) => {
              return <Dropdown post={post} key={post.id} />;
            })}
          </div>
        </div>

        <div className='flex flex-row justify-center w-full max-width-screen-2xl'>
          <p className='text-gray-500 text-xl font-bold '>TOPICS:</p>
          <div className='flex flex-row'>
            {Data.map((x) => {
              return (
                <>
                  <button
                    class='text-brand-purple-light text-lg bg-transparent border border-solid border-blue-500 hover:bg-gray-400 hover:text-blue-700 active:bg-pink-600 font-bold uppercase px-6 py-3  rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'>
                    {x.c}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Main>
  );
}
export async function getStaticProps() {
  return {
    props: {
      posts: data,
    },
  };
}
