import Head from 'next/head';
import TopBar from '~/components/TopBar';
import { useAuth } from '~/hooks/use-auth';
import { useRouter } from 'next/router';

function Main({ children, className, title = 'YIU Academy' }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preload'
          as='font'
          href='/fonts/ChicleRegular.ttf'
          crossOrigin='true'></link>
      </Head>
      <TopBar />
      <main className={`flex-grow ${className ? className : ''}`}>
        {children}
      </main>
    </div>
  );
}

export default Main;
