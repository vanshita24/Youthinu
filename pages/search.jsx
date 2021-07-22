import Main from '~/layouts/main';

import '../styles/Home.module.css';
import Dropdown from '../components/Dropdown';
import data from '../mock/filter.json';
import Data from '../mock/searchCourses.json';

export default function Search({ posts }) {
  return (
    <Main>
      <h1 className='text-brand-purple-light  text-4xl font-headline font-sans font-extrabold flex justify-start mt-20 '>
        Find Classes
      </h1>
      <div className='bg-gray-100 flex flex-col justify-center min-w-full h-96 '>
        <div className='container h-40 flex flex-col justify-center items-center  border-b-2  border-solid border-gray-200 mt-15 '>
          <div className='relative '>
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
              class='h-14 min-w-max pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
              placeholder='Any topic '></input>
            <div className='absolute top-2 right-2'>
              <button class='h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600'>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          {posts.map((post) => {
            return <Dropdown post={post} key={post.id} />;
          })}
        </div>
        <button
          class='flex justify-start mt-3 mx-3 text-brand-red-light text-2xl bg-transparent    font-bold uppercase    rounded outline-none focus:outline-none ease-linear '
          type='button'>
          TOPICS:
        </button>
      </div>
      <div className='grid grid-cols-3 gap-3  sm:grid-cols-5 p-2'>
        {Data.map((x) => {
          return (
            <>
              <button
                class=' text-white text-lg bg-brand-purple-light border border-solid border-blue-500 hover:bg-brand-blue-light hover:text-black   font-bold uppercase  rounded outline-none focus:outline-none ease-linear '
                type='button'>
                {x.c}
              </button>
            </>
          );
        })}
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
