import SliderCard from './SliderCard';
import { useKeenSlider } from 'keen-slider/react';

const Slider = ({ featuredCourses }) => {
  // const [pause, setPause] = useState(true);
  // const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 500,
    spacing: 10,
  });

  /*
  todo : paused auto slide
   dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  */

  return (
    <div className='px-2 flex items-center justify-center lg:p-10 max-h-full mb-10 rounded-2xl  max-w-full md:-mt-14 lg:-mt-36 z-10 relative'>
      <button
        className='w-14 h-14 hidden md:flex rounded-l-full bg-brand-purple-dark p-3  items-center justify-center shadow-xl'
        onClick={(e) => e.stopPropagation() || slider.prev()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 512.008 512.008'
          stroke='currentColor'
          className='fill-current text-yellow-300 transform hover:scale-125 active:scale-100 active:text-yellow-500'>
          <path
            d='M458.675,202.68H207.091l77.781-77.781c21.844-21.838,21.849-57.249,0.011-79.093
      c-21.838-21.844-57.249-21.849-79.093-0.011L3.123,248.461c-4.164,4.165-4.164,10.917,0,15.083L205.79,466.211
      c21.838,21.838,57.245,21.838,79.083,0c21.838-21.838,21.838-57.245,0-79.083l0,0l-77.781-77.781h251.584
      c29.455,0,53.333-23.878,53.333-53.333S488.13,202.68,458.675,202.68z'
          />
        </svg>
      </button>
      <div ref={sliderRef} className='keen-slider max-w-3xl'>
        {featuredCourses?.map((slider, _index) => (
          <SliderCard
            {...slider}
            preloadImage={_index === 0}
            key={_index}
            className='keen-slider__slide'
          />
        ))}
      </div>
      <button
        className='w-14 h-14  hidden md:flex rounded-r-full bg-brand-purple-dark p-3  items-center justify-center shadow-xl '
        onClick={(e) => e.stopPropagation() || slider.next()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 512.008 512.008'
          stroke='currentColor'
          className='fill-current text-yellow-300 transform hover:scale-125 active:scale-100 active:text-yellow-500'>
          <path
            d='M306.219,45.796c-21.838-21.838-57.245-21.838-79.083,0s-21.838,57.245,0,79.083l77.781,77.803
      H53.333C23.878,202.682,0,226.56,0,256.015c0,29.455,23.878,53.333,53.333,53.333h251.584l-77.781,77.781
      c-21.838,21.838-21.838,57.245,0,79.083c21.838,21.838,57.245,21.838,79.083,0l202.667-202.667c4.164-4.165,4.164-10.917,0-15.083
      L306.219,45.796z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
