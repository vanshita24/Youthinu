import Main from '~/layouts/main';
import data from '../mock/faq.json';
import FaqItem from '../components/faqs/FaqItem';

export default function Faqs({ posts }) {
  return (
    <Main>
      <div className='m-auto flex flex-col justify-center'>
        <h1 className='text-purple-600  text-4xl font-headline font-sans font-extrabold mt-20 flex justify-center'>
          Frequently Asked Questions (FAQs)
        </h1>
        <div className='flex justify-center px-10 py-15 min-w-full mt-3 '>
          <div className='px-10 py-15 min-w-full '>
            <div className='group inline-block relative min-w-full'>
              {posts.map((post) => {
                return <FaqItem post={post} key={post.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </Main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: data,
    },
  };
}
