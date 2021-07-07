import Image from 'next/image';

export default function GalleryFooter() {
  return (
    <div className='grid grid-cols-3 gap-x-4 gap-y-2 relative'>
      <GalleryFooterImage url='/images/course/Fractions.jpg' alt='fractions' />
      <GalleryFooterImage url='/images/course/Money.jpg' alt='money' />
      <GalleryFooterImage
        url='/images/course/NumberSense.jpg'
        alt='numbersense'
      />
      <GalleryFooterImage url='/images/course/Python.jpg' alt='python' />
      <GalleryFooterImage url='/images/course/Sports.jpg' alt='sports' />
      <GalleryFooterImage url='/images/course/squares.jpg' alt='scratch' />
      <GalleryFooterImage url='/images/course/Year.jpg' alt='year' />
      <GalleryFooterImage
        url='/images/course/TimeDistance.jpg'
        alt='time & distance'
      />
      <GalleryFooterImage
        url='/images/course/TradeBalancing.jpg'
        alt='trade & balancing'
      />
    </div>
  );
}

const GalleryFooterImage = ({ url, alt }) => (
  <Image
    src={url}
    alt={alt}
    layout='intrinsic'
    className='rounded-md'
    width={115}
    height={80}
  />
);
