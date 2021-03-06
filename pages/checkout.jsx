import Main from '~/layouts/main';
import App from './payment';

export default function checkout() {
  return (
    <Main>
      <div className=' min-w-full p-5  '>
        <div className='grid  md:grid-cols-2 sm:grid-col-1 '>
          <div className='flex flex-col bg-gray-50 mr-8'>
            <header className='  mb-12 overflow-hidden '>
              <h1 className='text-3xl font-bold text-brand-purple-dark p-10 border-b border-grey-200 uppercase '>
                Checkout
              </h1>
              <form action=''>
                <div className='p-10 pt-8 border-b border-gray-200'>
                  <div className='flex items-center mb-4'>
                    <div className='border-2 border-brand-green-light py-2 px-3 rounded-full font-bold mr-2 text-brand-purple-dark'>
                      1
                    </div>
                    <h2 className='text-lg font-bold text-brand-purple-dark'>
                      Student's Information
                    </h2>
                  </div>
                  <div className='flex flex-wrap'>
                    <div className='w-1/2'>
                      <label
                        for='first_name'
                        type='text'
                        className='text-lg mb-2 '>
                        First Name
                      </label>
                      <input
                        id='first_name'
                        type='text'
                        className='w-full text-sm bg-blue-200 text-brand-green-dark rounded px-3 py-3 outline-0'
                      />
                    </div>
                    <div className='w-1/2 mr-1 mt-2 '>
                      <label
                        for='last_name'
                        type='text'
                        className='text-lg mb-2 '>
                        Last Name
                      </label>
                      <input
                        id='last_name'
                        type='text'
                        className='w-full text-sm bg-blue-200 text-brand-green-dark rounded px-3 py-3 outline-0'
                      />
                    </div>
                    <div className='w-1/2'>
                      <label for='age' type='text' className='text-lg mb-2 '>
                        Age
                      </label>
                      <input
                        id='age'
                        type='text'
                        className='w-full text-sm bg-blue-200 text-brand-green-dark rounded px-3 py-3 outline-0'
                      />
                    </div>
                    <div className='w-1/2 mr-1 mt-2 '>
                      <label for='email' type='email' className='text-lg mb-2 '>
                        Email
                      </label>
                      <input
                        id='email'
                        type='email'
                        className='w-full  text-sm bg-blue-200 text-brand-green-dark rounded px-3 py-3 outline-0'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </header>

            <div className='p-5 border-b border-gray-200'>
              <div className='flex items-center mb-4'>
                <div className=' flex flex-col'>
                  <div className='flex flex-row'>
                    <div className='border-2 border-brand-green-light py-2 px-3 rounded-full font-bold mr-2 text-brand-purple-dark'>
                      2
                    </div>
                    <h2 className='text-lg font-bold text-brand-purple-dark'>
                      Your Payment Information
                    </h2>
                  </div>

                  <div className=' ml-5 mt-5 flex bg-blue-200 border-2 justify-center'>
                    <App />
                  </div>
                </div>

                <br></br>
              </div>
            </div>
          </div>
          <div className='flex justify-items-end  '>
            <article className=' mt-10 flex justify-self-end relative  sm:mx-auto bg-brand-green-light rounded-xl flex-col shadow-sm hover:shadow-lg overflow-hidden  h-screen w-96 '>
              <figure>
                <img
                  className='p-3'
                  src='/images/drawers.jpg'
                  layout='responsive'
                  height={222}
                  width={400}
                />
              </figure>
              <h1 className='ml-10 mt-6 px-0 text-3xl font-headline tracking-tight font-extrabold text-black leading-snug '>
                Summary
                <br />
              </h1>
              <div className='flex flex-col items-center flex-grow'>
                <div className='flex flex-col '>
                  <div className='flex  mt-4'>
                    <span className='text-black text-xl '>
                      <ul>
                        <li>Original price: ???4,480</li>
                        <li>Coupon discounts: -???3,990</li>
                      </ul>
                      <div className=' border-t-2 border-gray-400 text-2xl text-black'>
                        Total : ???490
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Main>
  );
}
