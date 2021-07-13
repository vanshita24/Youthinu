import Data from '../../mock/faq.json';
import FaqItem from '../FaqItem';
import { useState } from 'react';

export default function FaqDropdown() {
  const [value, setValue] = useState(false);

  return (
    <div className='flex justify-center px-10 py-15 min-w-full mt-3 '>
      <div className='px-10 py-15 min-w-full '>
        <div className='group inline-block relative min-w-full'>
          {Data.map((post) => {
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
