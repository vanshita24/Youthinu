import Main from '~/layouts/main';
import { MainFooter } from '~/components/Footers';
import '../styles/Home.module.css';

export default function Home(props) {
  return (
    <Main>
      <div className='m-auto'>
        <h1 className='text-purple-600  text-4xl font-headline font-sans font-extrabold flex justify-center mt-20'>
          Frequently Asked Questions (FAQs)
        </h1>
        <div className='flex justify-center px-10 py-15 min-w-full  '>
          <div className='px-10 py-15 min-w-full '>
            <div className='group inline-block relative min-w-full'>
              <button className='bg-gray-300 text-gray-700 font-semibold p-2 rounded inline-flex justify-between min-w-full'>
                <span className='ml-3'>What is yiu academy ?</span>
                <svg
                  className='fill-current h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'>
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </button>
              <ul className='absolute hidden text-gray-700 pt-1 group-hover:block group-focus:block'>
                <li className=''>
                  <a
                    className='rounded-t bg-gray-200 px-2 py-2 block whitespace-no-wrap'
                    href='#'>
                    Yiuacademy is a marketplace and online learning portal for
                    kids aged 2 till 22. We help parents find great classes for
                    their kids. And we help teachers to promote their classes to
                    parents. We offer both recorded video classes and live
                    classes from teachers.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
