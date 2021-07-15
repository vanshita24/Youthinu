import Data from '../../mock/individual.json';
import Main from '~/layouts/main';
import Star from '../../components/Star';
export default function Indi() {
  return (
    <Main>
      <div className='bg-brand-purple-dark h-96 min-w-full '>
        <div className='grid  md:grid-cols-2 sm:grid-col-1 '>
          <div>
            <header className=' h-96 mb-12 overflow-hidden '>
              <h1 className='mt-6 text-2xl md:text-4xl font-headline tracking-tight font-extrabold text-white leading-snug ml-5'>
                Tamil Club Level 1
              </h1>

              <h1 className='mt-6 text-xl md:text-3xl font-headline tracking-tight  text-white leading-snug ml-5  '>
                This Spoken Tamil course focuses on learning the language and
                speaking the language, rather than learning the script. In this
                session you will learn the most important Tamil spoken grammar
                with detailed explanations
              </h1>
            </header>
            <div className='p-5'>
              <h1 className='text-black font-bold text-2xl '>
                What you'll learn
              </h1>
              <div className='grid md:grid-cols-2 sm:grid-col-1'>
                <p>
                  <ul>
                    <li className='p-2'>
                      * FULLY UPDATED FOR SAA-C02: Pass the AWS Certified
                      Solutions Architect Associate Certification
                    </li>
                    <li className='p-2'>
                      * Perform Real-World Solution Architecture on AWS
                    </li>
                    <li className='p-2'>
                      * Learn the Serverless Fundamentals (Lambda, DynamoDB,
                      Cognito, API Gateway)
                    </li>
                  </ul>
                </p>
                <p>
                  <ul>
                    <li className='p-2'>
                      * FULLY UPDATED FOR SAA-C02: Pass the AWS Certified
                      Solutions Architect Associate Certification
                    </li>
                    <li className='p-2'>
                      * Perform Real-World Solution Architecture on AWS
                    </li>
                    <li className='p-2'>
                      * Learn the Serverless Fundamentals (Lambda, DynamoDB,
                      Cognito, API Gateway)
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-items-end'>
            <article className=' mt-10 flex justify-self-end relative  sm:mx-auto bg-gray-50  rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden  h-full '>
              <figure>
                <img
                  className='p-3'
                  src='/images/drawers.jpg'
                  layout='responsive'
                  height={222}
                  width={400}
                />
              </figure>

              <div className='flex flex-col items-center flex-grow'>
                <div className='flex justify-end'>
                  <h1 className='mt-6 text-3xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug ml-5'>
                    $330
                    <br />
                    <span className='text-black text-2xl'>
                      This course includes:
                    </span>
                    <div className=' text-xl text-gray-500'>
                      <ul>
                        <li>* 25.5 hours on-demand video</li>
                        <li>* 13 articles</li>
                        <li>* Access on mobile and TV</li>
                        <li>* Certificate of completion</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='flex justify-center  h-35  '>
                  <a
                    className='mb-5 bg-red-500 py-2 px-3 rounded-md text-white font-semibold text-lg mr-10 ml-6 mt-10 '
                    href=''>
                    Buy Now
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Main>
  );
}
