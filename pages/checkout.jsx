import Main from '~/layouts/main';
import React from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';

function handleToken(token, addresses) {
  console.log({ token, addresses });
}
export default function checkout() {
  return (
    <Main>
      <div className='max-w-wp-pusher mx-auto p-10'>
        <div className='flex mb-8 shadow-lg'>
          <div className='w-2/3 bg-white rounded-lg'>
            <form action=''>
              <h1 className='text-3xl font-bold text-brand-purple-dark p-10 border-b border-grey-200 uppercase '>
                {' '}
                checkout
              </h1>
              <div className='p-10 pt-8 border-b border-gray-200'>
                <div className='flex items-center mb-4'>
                  <div className='border-2 border-brand-green-light py-2 px-3 rounded-full font-bold mr-2 text-brand-purple-dark'>
                    1
                  </div>
                  <h2 className='text-lg font-bold text-brand-purple-dark'>
                    Your Basic Information
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
                      className='w-full text-sm bg-brand-blue-light text-brand-green-dark rounded px-3 py-3 outline-0'
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
                      className='w-full text-sm bg-brand-blue-light text-brand-green-dark rounded px-3 py-3 outline-0'
                    />
                  </div>
                  <div className='w-1/2 mr-1 mt-2 '>
                    <label for='email' type='email' className='text-lg mb-2 '>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='w-full text-sm bg-brand-blue-light text-brand-green-dark rounded px-3 py-3 outline-0'
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className='p-10 pt-8 border-b border-gray-200'>
              <div className='flex items-center mb-4'>
                <div className='border-2 border-brand-green-light py-2 px-3 rounded-full font-bold mr-2 text-brand-purple-dark'>
                  2
                </div>

                <h2 className='text-lg font-bold text-brand-purple-dark'>
                  Your Payment Information
                </h2>
                <br></br>
                <br></br>
                <div className=' ml-5 mt-14'>
                  <StripeCheckout
                    stripeKey='pk_live_51IRygNKRYckKhBlpD3XxxglnwXaq0zNGVXgMLQjUzK21dJW60jn9rjZHBDwUTfOF9ZDPjBeWJu7DJvog0eUR9pM800QsDjw1s7'
                    token={handleToken}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='shadow-lg w-1/3 bg-brand-green-light text-brand-purple-dark rounded-r'>
            <h2 className='text-3xl font-bold p-10  uppercase'>Summary</h2>
          </div>
        </div>
      </div>
    </Main>
  );
}
