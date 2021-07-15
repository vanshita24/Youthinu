import Main from '~/layouts/main';
import '../styles/Home.module.css';
import Blogs from '../components/Blogs';
import data from '../mock/blog.json';

import Head from 'next/head';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <Main className='container'>
      <header className='flex items-center justify-center mb-12 overflow-hidden '>
        <video
          autoPlay
          loop
          muted
          className=' w-auto  h-1/4'
          height='720'
          width='1280'>
          <source src='/videos/banner.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </header>
      <div className='flex flex-col lg:px-12 px-6'>
        <div className='flex self-start flex-col lg:flex-row max-w-5xl bg-purple-100 overflow-hidden shadow-md rounded-lg mb-12 p-1 lg:p-5 justify-center items-center '>
          <img
            src='/images/individual.jpeg'
            alt=''
            className='w-full h-64 object-center rounded-lg shadow-lg'
          />

          <div className='p-8'>
            <div>
              <p className='text-gray-700 text-base font-bold justify-center line-clamp-6 '>
                <Link href='/liveAcademy/individual'>
                  <a className=' flex focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl justify-center'>
                    Individual Courses
                  </a>
                </Link>
                <br></br>
                Schools Kids YouthInU ties up with various schools and
                organizations to teach Logical Math and Coding to kids (Grade 1
                to 8 )
              </p>
            </div>
          </div>
        </div>

        <div className='flex self-end flex-col lg:flex-row max-w-5xl bg-purple-100 overflow-hidden shadow-md rounded-lg mb-12 p-1 lg:p-5 justify-center items-center  '>
          <img
            src='/images/school.jpeg'
            alt=''
            className='w-full h-64 object-center rounded-lg shadow-lg'
          />
          <div className='p-8'>
            <div className='flex justify-end'>
              <p className='text-gray-700 text-base font-bold justify-center line-clamp-6 '>
                <Link href='/liveAcademy/school'>
                  <a className=' flex  focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl justify-center'>
                    School Courses
                  </a>
                </Link>
                <br></br>
                Schools Kids YouthInU ties up with various schools and
                organizations to teach Logical Math and Coding to kids (Grade 1
                to 8 )
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-5'>
        <a
          href='/contactus'
          className=' flex justify-center items-center focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-pink-800 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl w-48'>
          Book Live Demo
        </a>
      </div>
      <section className='w-full flex flex-col  items-center pb-10 bg-fixed'>
        <div>
          <div className=' grid  md:grid-cols-1 lg:grid-cols-3 gap-6 sm:grid-cols-1 '>
            {posts.map((post) => {
              return <Blogs post={post} key={post.id} />;
            })}
          </div>
        </div>
      </section>
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
