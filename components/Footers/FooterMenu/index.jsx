import SubscribeFooter from './SubscribeFooter';
import GalleryFooter from './GalleryFooter';
import ContactUSFooter from './ContactUSFooter';

export default function FooterMenu() {
  return (
    <footer className='flex flex-col'>
      <div className=' bg-brand-green-dark w-full flex justify-center'>
        <div className='container flex flex-col justify-between md:flex-row md:space-x-6 md:space-y-0 space-y-6  p-8 sm:p-12  text-white '>
          <SubscribeFooter />
          <GalleryFooter />
          <ContactUSFooter />
        </div>
      </div>
    </footer>
  );
}
