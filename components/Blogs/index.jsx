export default function Blogs({ post }) {
  return (
    <article className=' relative h-3/4  sm:max-w-xl sm:mx-auto bg-gray-50 flex rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden w-96 mt-64 '>
      <figure>
        <img
          className='p-3'
          src={'/images/' + post.i}
          layout='responsive'
          height={222}
          width={400}
        />
      </figure>

      <div className='flex flex-col items-center flex-grow'>
        <div className='flex justify-end'>
          <h1 className='mt-6 text-3xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug ml-5'>
            {post.h1} <br />
            <span className='text-green-700'>{post.h2}</span>
            <div className=' font-bold text-xl'>- {post.a}</div>
          </h1>
        </div>

        <p className='text-gray-600 p-5  line-clamp-3'>{post.c}</p>
        <div className='flex justify-center  h-35  '>
          <a
            className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
            href={'/liveAcademy/' + post.l}>
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}
