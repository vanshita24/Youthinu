import Course from '~/components/Course';

export default function CourseList({ name, edges }) {
  return (
    <div className='flex flex-col items-start my-12 '>
      <div>
        <h5 className='text-3xl text-brand-purple-dark underline font-chicle text-font-extrabold tracking-wider capitalize'>
          {name} Courses
        </h5>
      </div>
      <div className='flex flex-row justify-center mt-12 w-full'>
        <div className='grid md:grid-cols-2 2xl:grid-cols-4 col-auto  gap-6  divide-green-500'>
          {edges?.map((edge, index) => {
            const course = edge.node;
            return (
              <div key={course.id} className='h-auto'>
                <Course course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
