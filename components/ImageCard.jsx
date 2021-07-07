import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({ name: title, image: img, index, url }) => {
  const classNames =
    index % 2 == 0
      ? 'mx-5 mt-5 mb-5 md:mb-0 cursor-pointer max-w-xs rounded-xl overflow-hidden max-h-full bg-gray-100 flex flex-col items-stretch justify-start shadow-sm'
      : 'mx-5 lg:mt-52 md:mb-0 cursor-pointer max-w-xs rounded-xl overflow-hidden max-h-full bg-gray-100 flex flex-col items-stretch justify-start shadow-sm';
  return (
    <article className={classNames}>
      <figure className='rounded-xl overflow-hidden relative h-96 w-64'>
        <Link href={url}>
          <div className='z-10 rounded-xl absolute h-96 w-64 opacity-0 backdrop-filter backdrop-blur-xl backdrop-saturate-150 transition duration-200 ease-in-out group hover:opacity-100 flex items-center justify-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-20 w-20 stroke-current text-white group-hover:animate-pulse'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='{2}'
                d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='{2}'
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </Link>
        {img ? (
          <Image
            src={img?.uri}
            alt={title}
            width={256}
            height={384}
            objectPosition='right center'
          />
        ) : null}
      </figure>
      <p className='text-gray-900 text-center font-extrabold text-xl py-2'>
        {title}
      </p>
    </article>
  );
};

export default ImageCard;
