import Main from '~/layouts/main';
import '../styles/Home.module.css';
import Blogs from '../components/Blogs';
import data from '../mock/blog.json';

import Head from 'next/head';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <div>
      <Main>
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
        <div className='h-full px-12 py-12 lg:flex lg:justify-center lg:items-center'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-x-16'>
            <div className='w-full max-w-md mx-auto '>
              <img
                className=' rounded-lg shadowed-lg mb-10'
                src='/images/school.jpeg'
              />
              <Link href='/liveAcademy/school'>
                <a className=' flex justify-center focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl'>
                  School Courses
                </a>
              </Link>
            </div>
            <div className='w-full max-w-md mx-auto '>
              <img
                className=' rounded-lg shadowed-lg mb-10'
                src='/images/school.jpeg'
              />
              <Link href='/liveAcademy/individual'>
                <a className=' flex justify-center focus:outline-none focus:ring focus:border-yellow-300 hover:bg-yellow-600 p-3 text-xl text-white  bg-purple-900 active:scale-100 active:text-yellow-500   focus:shadow-outline rounded-xl'>
                  Individual Courses
                </a>
              </Link>
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
            <div className=' grid  md:grid-cols-3 gap-6 sm:grid-cols-1 '>
              {posts.map((post) => {
                return <Blogs post={post} key={post.id} />;
              })}
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: data,
    },
  };
}
