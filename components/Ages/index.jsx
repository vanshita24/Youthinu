import ImageCard from '../ImageCard';
import Image from 'next/image';

const AgesSection = ({ edges }) => {
  return (
    <div className='flex flex-col items-center pb-20 relative'>
      <div className='h-28 flex items-center'>
        <h2 className='text-4xl  font-chicle text-font-extrabold tracking-wider text-brand-purple-dark underline  text-center w-full'>
          Grades
        </h2>
      </div>
      <div className='flex flex-col flex-wrap sm:flex-row items-center md:justify-center w-full -mt-5 relative'>
        {edges?.map(({ node: course }, index) => {
          return (
            <ImageCard
              {...course}
              url={'ages/' + course.id}
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
