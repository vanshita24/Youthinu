import InboxInIcon from '@heroicons/react/outline/InboxInIcon';
import { LoadingScreenSmall } from '~/components/LoadingScreens';
import { useRef } from 'react';
import { useMutation } from 'urql';

const subscribeEmailQuery = `
mutation SubscribeEmail($input:SubscribedEmailInput!) {
  subscribeEmail(input:$input)
}
`;

export default function SubscribeFooter() {
  const emailRef = useRef();
  const [subscribeResp, subscribeEmail] = useMutation(subscribeEmailQuery);
  const { fetching, error } = subscribeResp;

  function onSubscribeClicked() {
    if (emailRef.current) {
      const variables = {
        input: {
          email: emailRef.current.value,
        },
      };
      subscribeEmail(variables);
    }
  }

  return (
    <div className='flex flex-col space-y-3 justify-start'>
      <div className='flex flex-col space-y-2 text-lg'>
        <div className='inline-flex space-x-2 items-center flex-wrap'>
          <h1 className='text-white text-5xl font-semibold font-chicle tracking-widest '>
            YouthInU Academy
          </h1>
        </div>
        <div>
          <p>
            Want to stay upto date with our <b>Offers</b> and <b>updates</b> ?
          </p>
          <p> Subscribe to our newsletter!</p>
        </div>
        {error ? (
          <p className='text-red-600 font-semibold text-sm'>
            unable to subscribe
          </p>
        ) : null}
        <div className='py-1'>
          {fetching ? (
            <LoadingScreenSmall />
          ) : (
            <div className='border-[2px] flex flex-row border-white max-w-max bg-white rounded-md focus:bg-white items-center justify-center overflow-hidden'>
              <input
                ref={emailRef}
                type='text'
                placeholder='E-mail..'
                className='px-4 py-3 text-white placeholder-white bg-brand-green-dark focus-visible:outline-white'
              />
              <InboxInIcon
                onClick={onSubscribeClicked}
                className='px-1 w-auto h-10  text-brand-green-dark cursor-pointer'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
