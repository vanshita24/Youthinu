import RefreshIcon from '@heroicons/react/solid/RefreshIcon';

export function LoadingScreenSmall({ className }) {
  return (
    <div className='flex h-full w-full items-center justify-center pb-14'>
      <RefreshIcon
        className={`animate-spin ${
          className || 'h-5 w-5 text-brand-purple-dark'
        }`}></RefreshIcon>
    </div>
  );
}
