import Image from 'next/image';

const Course = ({ course }) => {
  const {
    imageCard: img,
    grade: { name: ageGroup },
    actualPriceUSD,
    offerPriceUSD,
    showOffer,
    name,
    overview: desc,
    url,
  } = course;
  return (
    <article className='relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-80'>
      <figure>
        <Image
          src={img?.uri || '/images/course/Fractions.jpg'}
          alt={name}
          layout='responsive'
          height={222}
          width={320}
        />
      </figure>
      <ul className=' h-16 items-stretch w-full bg-gray-100 grid grid-cols-2'>
        <li className='bg-brand-purple-dark text-white font-bold flex flex-col justify-center items-center px-2'>
          <p>Age Group</p>
          <p>{ageGroup}</p>
        </li>
        <li className='bg-brand-red-dark flex items-center justify-center'>
          <p className='text-white font-extrabold text-2xl flex items-center justify-center'>
            $ {actualPriceUSD}
          </p>
        </li>
      </ul>
      <div className='flex flex-col items-center flex-grow'>
        <h5 className='text-gray-900 font-extrabold text-xl mt-5'>{name}</h5>
        <p className='text-gray-600 p-5 flex-grow'>{desc}</p>
        <a
          className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg'
          href={url}>
          Watch
        </a>
      </div>
    </article>
  );
};

export default Course;
