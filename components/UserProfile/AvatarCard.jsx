import Image from 'next/image';
export default function AvatarCard({ avatar }) {
  const { uri } = avatar || {};
  return (
    <div className='self-center py-5'>
      <Image
        layout='responsive'
        width={500}
        height={500}
        alt='default avatar'
        className='w-48 h-auto rounded-full object-contain bg-brand-green-dark hover:bg-brand-green-light p-2 cursor-pointer'
        src={uri || '/images/avatar.svg'}
      />
      <h6 className='text-lg font-semibold text-gray-900 mt-3 text-center'>
        Arun Shankar
      </h6>
    </div>
  );
}
