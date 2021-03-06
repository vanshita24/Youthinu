import Main from '~/layouts/main';

export default function ContactUS() {
  return (
    <Main>
      <div className='flex w-full justify-center items-center py-6'>
        <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-brand-purple-light w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'> Contact US</h1>
              <p className='pt-2 text-sm'>
                For any queries, leave us a message
              </p>
            </div>
            <div className='flex flex-col space-y-8'>
              <div className='inline-flex space-x-2 items-centre'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  <path d='M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z' />
                  call
                </svg>
                <span> +91 8610869975</span>
              </div>
              <div className='inline-flex space-x-2 items-centre'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z'
                    clipRule='evenodd'
                  />
                  e-mail
                </svg>
                <span> info@youthinu.com</span>
              </div>
              <div className='inline-flex space-x-2 items-centre'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span> 3733, Cottesmore Dr, HighPoint, NC, USA </span>
              </div>
              <div className='flex space-x-4 text-lg'>
                <a href='https://www.facebook.com/monisha.ceg/'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'></path>
                  </svg>
                </a>
                <a href='https://www.instagram.com/youthinuadmin/'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'></path>
                  </svg>
                </a>
                <a href='https://twitter.com/Youthinuinc'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'>
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/company/71055509/admin/'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width='100px'
                    height='100px'>
                    {' '}
                    <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z' />
                  </svg>
                </a>
                <a href='https://www.youtube.com/channel/UCxia8XzUsBHX_u4_PqOQkYQ'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 40 40'
                    width='100px'
                    height='100px'>
                    <path
                      fill='#98ccfd'
                      d='M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z'
                    />
                    <path
                      fill='#4788c7'
                      d='M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z'
                    />
                    <path
                      fill='#fff'
                      d='M20,31c-6.065,0-11-4.935-11-11S13.935,9,20,9s11,4.935,11,11S26.065,31,20,31z M20,11 c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S24.963,11,20,11z'
                    />
                    <polygon fill='#fff' points='16,15 16,20 16,25 25,20' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute w-40 h-40 brand-blue-light rounded-full'></div>
          </div>
          <div className='bg-white rounded-xl shadow-lg p-16'>
            <form action='' className='flex flex-col space-y-4'>
              <div>
                <label htmlFor=''>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  required
                  className='ring-1 text-purple-600 w-full rounded-md px-5 py-2 outline-none focus:ring-2 focus:ring-brand-purple-light'></input>
              </div>
              <div>
                <label htmlFor=''>E-Mail</label>
                <input
                  type='text'
                  placeholder='E-Mail'
                  required
                  className='ring-1 text-purple-600 w-full rounded-md px-5 py-2 outline-none focus:ring-2 focus:ring-brand-purple-light'></input>
              </div>
              <div>
                <label htmlFor=''>Country</label>
                <input
                  type='text'
                  placeholder='Country'
                  className='ring-1 text-purple-600 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-brand-purple-light'></input>
              </div>
              <div>
                <label htmlFor=''>Contact No</label>
                <input
                  type='text'
                  placeholder='Contact No'
                  className='ring-1 text-purple-600 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-brand-purple-light'></input>
              </div>
              <div>
                <label htmlFor=''>Message</label>
                <textarea
                  placeholder='Message'
                  required
                  rows='4'
                  className='ring-1 text-purple-600 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-brand-purple-light'></textarea>
              </div>
              <button
                type='submit'
                className='inline-block self-end bg-brand-purple-light text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
}
