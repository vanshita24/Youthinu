import Main from '~/layouts/main';
import '../styles/Home.module.css';
import FaqDropdown from '~/components/faqDropdown';

export default function Home(props) {
  return (
    <Main>
      <div className='m-auto flex flex-col justify-center'>
        <h1 className='text-purple-600  text-4xl font-headline font-sans font-extrabold mt-20 flex justify-center'>
          Frequently Asked Questions (FAQs)
        </h1>
        <FaqDropdown />
      </div>
      <br></br>
      <br></br>
    </Main>
  );
}
