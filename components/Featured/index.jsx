import VideoSection from './VideoBanner';
import Slider from './Slider';

const FeaturedSection = ({ courses, bannerVideoURL }) => {
  return (
    <>
      <div className='rounded-section overflow-hidden w-full hidden md:block bg-brand-video-purple'>
        <VideoSection bannerVideoURL={bannerVideoURL} />
      </div>
      <Slider featuredCourses={courses} />
    </>
  );
};
export default FeaturedSection;
