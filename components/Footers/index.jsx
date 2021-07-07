import Image from 'next/image';
import FooterMenu from './FooterMenu';

export const MainFooter = () => (
  <footer className='flex flex-col'>
    <section className='py-16 bg-wave bg-bottom md:bg-bottom bg-repeat-x  h-96 w-full relative'>
      <div className='w-40 h-auto absolute right-12 sm:-top-32 top-0  animate-up-down'>
        <Image
          quality={100}
          src='/images/animations/farmanimalsballoon.jpg'
          alt='animals in a baloon'
          objectFit='scale-down'
          layout='responsive'
          width={160}
          height={200}
        />
      </div>
      <div className='w-64 h-64 absolute right-0 top-32 xl:right-96 '>
        <Image
          src='/images/animations/layang2_smil.svg'
          alt='kid with kite'
          layout='fill'
        />
      </div>
    </section>
    <FooterMenu></FooterMenu>
    <div className='bg-brand-red-dark bottom-0 h-10 w-full shadow-md flex items-center justify-center'>
      <h6 className='text-gray-50 text-base'>&#169; 2021 YouthInU</h6>
    </div>
  </footer>
);

export const MinFooter = () => (
  <footer className='flex flex-col'>
    <div className='bg-brand-red-dark bottom-0 h-10 w-full shadow-md flex items-center justify-center'>
      <h6 className='text-gray-50 text-base'>&#169; 2021 YouthInU</h6>
    </div>
  </footer>
);
