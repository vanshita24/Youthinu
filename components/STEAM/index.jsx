import ImageCard from '../ImageCard';

const AgesSection = ({ edges }) => {
  return (
    <div className='flex flex-col items-center pb-20 '>
      <div className='h-28 flex items-center'>
        <h2 className='text-4xl  font-chicle text-font-extrabold tracking-wider text-brand-purple-dark underline  text-center w-full'>
          Subjects
        </h2>
      </div>
      <div className='flex flex-col flex-wrap sm:flex-row items-center md:justify-center w-full -mt-5 relative'>
        {edges?.map(({ node: course }, index) => {
          return (
            <ImageCard
              {...course}
              url={`subjects/${course.id}`}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AgesSection;
