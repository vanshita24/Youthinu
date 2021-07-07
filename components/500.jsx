import Image from 'next/image';

export default function InternalError() {
  return (
    <div className='min-h-screen min-w-full flex items-center justify-center'>
      <Image src='/images/bg/500.svg' layout='fill' />
    </div>
  );
}
