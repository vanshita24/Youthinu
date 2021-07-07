import { MinLayout } from '~/layouts';
import Image from 'next/image';
import { useAuth } from '~/hooks/use-auth';
import { useEffect } from 'react';

export default function EmailVerificationPending() {
  const { triggerEmailVerification } = useAuth();

  useEffect(() => {
    triggerEmailVerification();
  }, []);

  return (
    <MinLayout className='flex items-center justify-center'>
      <div className='w-96 h-auto'>
        <Image
          layout='responsive'
          src='/images/bg/verify_email.svg'
          width={0}
          height={0}
        />
      </div>
      <div className='w-auto h-auto p-36'>
        <h1 className='text-5xl'>
          Verify Your Email, Please check your mailbox
        </h1>
      </div>
    </MinLayout>
  );
}
