import Image from 'next/image';
const VideoBanner = ({
  bannerVideoURL = `${process.env.NEXT_PUBLIC_ASSETS_ENDPOINT}/videos/YiuBanner.mp4`,
  poster = `${process.env.NEXT_PUBLIC_ASSETS_ENDPOINT}/images/banner.jpeg`,
}) => {
  return (
    <div className='flex items-center justify-center'>
      <video autoPlay muted loop poster={poster} width='1280' height='720'>
        <source src={bannerVideoURL} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoBanner;
