import { LoadingScreenSmall } from '~/components/LoadingScreens';
import ErrorPage from '~/components/500';
import Main from '~/layouts/main';
import Featured from '~/components/Featured';
import data from '~/mock/mainpage.json';
import { MainFooter } from '~/components/Footers';
import AgesSection from '../components/Ages';
import STEAMSection from '../components/STEAM';
import { ssrCache, client } from '../utils/urqlClient';
import { useQuery } from 'urql';
import { homePageQuery } from '../graphql';

export default function Home({ data }) {
  const { collectionByName, grades, subjects } = data;
  return (
    <Main className=''>
      <section className='w-full flex flex-col items-center pb-10 bg-fixed'>
        <a name='featured' id='featured'></a>
        <Featured {...collectionByName} />
      </section>
      
      <section>
        <a name='subjects' id='subjects'></a>
        <STEAMSection {...subjects} />
      </section>
      <section>
        <a name='ages' id='ages'></a>
        <AgesSection {...grades} />
      </section>
      <MainFooter />
    </Main>
  );
}

export async function getStaticProps() {
  const resp = await client.query(homePageQuery).toPromise();
  return {
    props: {
      data: resp?.data,
    },
  };
}
