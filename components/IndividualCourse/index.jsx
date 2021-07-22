import Star from '/components/Star.jsx';
import Image from 'next/image';
import Heart from '/components/Heart.jsx';
export default function IndividualCourse({ post }) {
  return (
    <article className=' relative h-full  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-80'>
      <figure>
        <Image
          objectFit='cover'
          src={'/' + post.Category + '/tr:w-320/' + post.image}
          layout='responsive'
          height={222}
          width={320}
        />
      </figure>
      <ul className=' h-16 items-stretch w-full bg-gray-100 grid grid-cols-2'>
        <li className='bg-pink-800 text-white font-bold flex flex-col justify-center items-center px-2'>
          <p>Age Group</p>
          <p>{post.age}</p>
        </li>
        <li className='bg-purple-800 flex items-center justify-center'>
          <p className='text-white font-extrabold text-2xl flex items-center justify-center'>
            {post.cost}
          </p>
        </li>
      </ul>
      <div className='flex flex-col items-center flex-grow'>
        <div className='flex justify-end'>
          <h5 className='text-gray-900 font-extrabold text-xl mt-5'>
            {post.name}
          </h5>
          <Heart />
        </div>

        <div className=' flex flex-row'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <p className='text-gray-600 p-5 flex-grow'>{post.desc}</p>
        <div className='flex justify-center grid grid-cols-3 gap-2 place-items-center h-35 '>
          <a
            className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-56 '
            href={'/indi/' + post.id}>
            Enroll
          </a>
        </div>
      </div>
    </article>
  );
}
