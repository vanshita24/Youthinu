import Main from '~/layouts/main';
import { LoadingScreenSmall } from '~/components/LoadingScreens';
import CourseList from '~/components/CourseList';
import { MinFooter } from '~/components/Footers';

import { client } from '~/utils/urqlClient';
import { subjectsQuery, coursesBySubjectQuery } from '../../graphql';
import { useCursorPaginationWithAutoLoad } from '../../hooks/pagination';

const Subjects = ({ id, courses }) => {
  const { edges, fetching } = useCursorPaginationWithAutoLoad({
    query: coursesBySubjectQuery,
    filters: { id: id },
    limit: 8,
    keyword: 'courses',
    initialData: courses,
  });

  if (!edges) {
    return <p>No Courses Found</p>;
  }
  return (
    <Main>
      <main className='container mx-auto px-6 lg:px-12'>
        <CourseList name='Testing' edges={edges} />
        {fetching && (
          <LoadingScreenSmall className='h-12 w-12 text-brand-purple-dark' />
        )}
      </main>
      <MinFooter />
    </Main>
  );
};

export default Subjects;

export async function getStaticPaths() {
  const resp = await client.query(subjectsQuery).toPromise();
  //Database Call
  const paths = resp?.data?.subjects?.edges?.map((sub) => {
    return {
      params: {
        id: sub.node.id,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const { id } = params;
    const resp = await client
      .query(coursesBySubjectQuery, {
        first: 8,
        id: id,
      })
      .toPromise();
    const data = resp?.data;
    if (!data || !data.courses) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        courses: data.courses,
        id: id,
      },
    };
  } catch (e) {
    console.log('e', e);
    return {
      notFound: true,
    };
  }
}
