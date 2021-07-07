import Image from 'next/image';

const SliderCard = ({
  name: title,
  imageLarge: img,
  overview: description,
  grade: subtitle,
  url,
  subject,
  className,
  preloadImage = false,
}) => {
  return (
    <div className={className}>
      <div className='absolute top-0 -right-0  z-20 w-20 overflow-visible '>
        <span className='block absolute text-center top-5 -left-5 transform  rotate-45 w-32 bg-brand-green-light text-brand-red-light font-semibold font-chicle tracking-wider text-sm p-1'>
          Featured
        </span>
      </div>
      <div className=' bg-brand-blue-dark w-full flex md:h-96 p-4 sm:p-10 rounded-lg justify-between flex-col-reverse md:flex-row items-stretch relative'>
        <article className='relative flex flex-col max-w-lg'>
          <header className='flex flex-col '>
            <span className='text-gray-700 font-semibold text-sm'>
              {subject?.name}
            </span>
            <h5 className='text-gray-900 font-semibold text-2xl font-chicle tracking-widest underline'>
              {title}
            </h5>
            <span className='text-gray-800 text-sm'>
              For Grades {subtitle?.name}
            </span>
          </header>
          <p className='text-gray-800 font-medium mt-4 flex-1 overflow-ellipsis overflow-hidden flex-wrap'>
            {description}
          </p>
          <footer className='mt-4 justify-center flex h-11 '>
            <button className='text-white bg-brand-red-dark border-b-4  border-brand-red-light font-semibold py-2 px-4 rounded-lg flex justify-between transform active:translate-y-1 active:border-b-0'>
              Watch &nbsp;
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </footer>
        </article>
        <figure className='flex-1 flex justify-center md:justify-end h-80 mb-5 md:ml-0'>
          <div className='relative h-auto md:w-56 w-64 '>
            {img ? (
              <Image
                src={img?.uri}
                alt={title}
                width={600}
                height={880}
                layout='responsive'
                priority={preloadImage}
              />
            ) : null}
          </div>
        </figure>
      </div>
    </div>
  );
};

export default SliderCard;
