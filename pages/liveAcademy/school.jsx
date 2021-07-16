import Main from '~/layouts/main';
//import "../styles/Home.module.css";
export default function ThirdPost() {
  return (
    <Main>
      <header className='relative flex items-center justify-center h-96 mb-12 overflow-hidden '>
        <img
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none '
          src='/images/tile.jpeg'
        />
      </header>
      <div className='h-full px-8 py-12 lg:flex lg:justify-center lg:items-center'>
        <div className='grid lg:grid-cols-3 gap-12 lg:gap-6'>
          <div className='w-full max-w-md mx-auto '>
            <img
              className=' rounded-t-lg shadowed-lg'
              src='/images/maths.jpeg'
            />
            <h1 className=' shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold  font-sans  rounded-b-lg '>
              Logical math
            </h1>
          </div>
          <div className='w-full max-w-md mx-auto '>
            <img
              className=' rounded-t-lg shadowed-lg'
              src='/images/coding.jpeg'
            />
            <h1 className=' shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold font-sans rounded-b-lg'>
              {' '}
              Coding
            </h1>
          </div>
          <div className='w-full max-w-md mx-auto'>
            <img
              className=' rounded-t-lg shadowed-lg'
              src='/images/combo.jpeg'
            />
            <h1 className=' shadowed-lg h-14 px-4 py-4 border border-black-400 font-bold font-sans rounded-b-lg '>
              Combo
            </h1>
          </div>
        </div>
      </div>
      <div className='grid  md:grid-cols-2 gap-10 sm:grid-cols-1 max-w-5xl m-auto bg-purple-100 overflow-hidden shadow-md rounded-lg mb-12 p-5 justify-center items-center '>
        <img
          src='/images/school.jpeg'
          alt=''
          className='w-full h-64 object-center rounded-lg shadow-lg'
        />

        <div className='p-8'>
          <div>
            <p className='text-gray-700 text-base font-bold justify-center line-clamp-6 '>
              <h1 className='text-purple-500 mt-6 text-2xl font-headline tracking-tight font-bold leading-snug '>
                CODING AND LOGICAL MATH CLASSES FOR SCHOOLS
              </h1>
              <br></br>
              One of the most vital objectives in education is to prepare
              students for their future careers. Over the last two decades,
              coding and programming have emerged as some of the most desirable
              skills for employers. To adapt to changes in the landscape of the
              jobs market, schools should adjust their curriculum and
              incorporate coding. Schools have a responsibility to provide their
              students with all the tools and skills they need to succeed in the
              modern workplace.
            </p>
            <div className='flex justify-center  h-35  '>
              <a
                className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
                href='/liveAcademy/blogs/schoolBlog'>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Main>
  );
}
