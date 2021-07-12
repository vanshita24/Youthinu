import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { useAuth } from '../hooks/use-auth';
import { useQuery } from 'urql';

const RefImageLogo = React.forwardRef((props, ref) => {
  return (
    <Image
      {...props}
      priority
      unoptimized
      src='/images/logo.svg'
      alt='yiu logo'
      layout='fill'
      objectFit='contain'
      objectPosition='left center'
    />
  );
});

//capitalize text-gray-50 font-semibold transition duration-500 ease-in-out
const NavLink = ({ href, children }) => {
  return (
    <div className='flex justify-between mr-9 items-center mx-3 xl:text-base text-xl xl:shadow-md py-2 px-4 rounded-full xl:bg-brand-purple-dark capitalize xl:text-gray-50 text-gray-900 font-semibold transition duration-500 ease-in-out xl:hover:bg-brand-red-light xl:hover:ring-4 xl:transform xl:hover:-translate-y-1 xl:hover:scale-110'>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6  text-gray-600 xl:hidden'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5l7 7-7 7'
        />
      </svg>
    </div>
  );
};

const TopBar = () => {
  const headerRef = useRef(undefined);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   const path = window?.location?.hash;

  //   if (path && path.includes("#")) {
  //     setTimeout(() => {
  //       const id = path.replace("#", "");
  //       const el = document.getElementsByName(path.replace("#", ""))[0];
  //       const r = el.getBoundingClientRect();
  //       window.top.scroll({
  //         top: pageYOffset + r.top,
  //         behavior: "smooth",
  //       });
  //     }, 600);
  //   }
  // });

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);

  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  // const onScroll = () => {
  //   if (
  //     headerRef &&
  //     headerRef.current &&
  //     headerRef.current.offsetTop < window.pageYOffset
  //   ) {
  //     headerRef.current?.classList.remove("xl:h-24");
  //     headerRef.current?.classList.remove("static");

  //     headerRef.current?.classList.add("fixed");
  //     headerRef.current?.classList.add("top-0");
  //     headerRef.current?.classList.add("opacity-90");
  //     headerRef.current?.classList.add("shadow-md");
  //     headerRef.current?.classList.add("xl:h-20");
  //     headerRef.current?.classList.add("z-20");
  //   } else {
  //     headerRef.current?.classList.add("xl:h-24");
  //     headerRef.current?.classList.add("static");
  //     headerRef.current?.classList.remove("fixed");
  //     headerRef.current?.classList.remove("top-0");
  //     headerRef.current?.classList.remove("opacity-90");
  //     headerRef.current?.classList.remove("shadow-md");
  //     headerRef.current?.classList.remove("xl:h-20");
  //     headerRef.current?.classList.remove("z-20");
  //   }
  // };

  // {` ${
  //   isScrolling ? "  opacity-90 shadow-md xl:h-20 z-10" : "xl:h-24 static"
  // }`}
  return (
    <header
      ref={headerRef}
      className='xl:flex justify-around transition duration-1000 ease-in-out w-full xl:mb-0 bg-white xl:h-24 static'>
      <div className='flex justify-around  px-3 py-2'>
        <div className='flex items-center xl:justify-start w-full max-w-screen-2xl justify-between px-4 py-2 xl:py-0'>
          <div className='h-full w-52 relative cursor-pointer'>
            <Link href='/'>
              <RefImageLogo />
            </Link>
          </div>
          <div className='xl:hidden'>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className='block p-2 transition duration-500 ease-in-out rounded-sm text-gray-700 hover:text-brand-blue-light focus:text-brand-blue-light focus:outline-none focus:bg-brand-green-dark hover:bg-brand-green-dark border-gray-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-auto fill-current'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          showMenu
            ? 'flex flex-col '
            : 'hidden' +
              ' xl:flex w-full xl:w-auto flex-col xl:flex-row border-t-2 xl:border-none transition duration-500 ease-in-out'
        }>
        <nav className=' text-white justify-start xl:items-center xl:ml-9 xl:mb-0 mb-5  xl:flex xl:flex-row flex flex-col bg-white flex-wrap flex-1 pt-3 xl:pt-0'>
        
          <NavLink href='/#featured'>Featured</NavLink>
          <NavLink href='/#ages'>Grades</NavLink>
          <NavLink href='/#subjects'>Subjects</NavLink>
          <NavLink href='/search'>Search</NavLink>
          <NavLink href='/aboutus'>About Us</NavLink>
          <NavLink href='/live'>Live Courses</NavLink>
          <NavLink href='/faqs'>FAQs</NavLink>
        </nav>

        <UserProfile />
      </div>
    </header>
  );
};

const CustomerQuery = `
query sessionCustomer{
  sessionCustomer{
    avatar{
      uri
      fileId
    }
  }
}
`;

const UserProfile = () => {
  const { user: AuthUser, signout } = useAuth();
  const [customer] = useQuery({
    query: CustomerQuery,
  });

  const { data: userProfile } = customer;
  const { sessionCustomer } = userProfile || {};
  const { avatar } = sessionCustomer || {};

  if (AuthUser?.email && AuthUser?.emailVerified) {
    return (
      <div className='relative flex text-left dropdown items-center'>
        <button
          className='hidden xl:flex xl:justify-end xl:items-center xl:my-7  flex-col xl:flex-row'
          aria-haspopup='true'
          aria-expanded='true'
          id='profile-menu-avatar'
          aria-controls='profile-menu-desktop'>
          <div className='w-14 h-auto'>
            <Image
              width={500}
              height={500}
              layout='responsive'
              alt='default avatar'
              className='w-48 h-auto rounded-full object-contain bg-brand-green-dark hover:bg-brand-green-light p-2 cursor-pointer'
              src={avatar && avatar.uri ? avatar.uri : '/images/avatar.svg'}
            />
          </div>
        </button>
        <div className='z-10 opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'>
          <div
            className='absolute -right-24 top-10 w-56 mt-2 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
            aria-labelledby='profile-menu-avatar'
            id='profile-menu-desktop'
            role='menu'>
            <div className='px-4 py-3'>
              <p className='text-sm leading-5'>Signed in as</p>
              <p className='text-sm font-medium leading-5 text-gray-900 truncate'>
                {AuthUser.email}
              </p>
            </div>
            <div className='py-1'>
              <MenuItem href='/user-profile' tabIndex='0' role='menuitem'>
                My Profile
              </MenuItem>
              <MenuItem href='#' tabIndex='1' role='menuitem'>
                My Courses
              </MenuItem>
              <MenuItem href='#' tabIndex='2' role='menuitem'>
                Account settings
              </MenuItem>
            </div>
            <div className='py-1'>
              <SignOutMenuItem tabIndex='3' signout={signout} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (AuthUser?.email && !AuthUser?.emailVerified) {
    signout();
  }
  return (
    <div className='xl:justify-end xl:items-center xl:my-7 xl:border-l-2  flex flex-col xl:flex-row'>
      <LoginButton />
      <RegisterButton />
    </div>
  );
};

const MenuItem = ({ href, tabindex, className, children }) => (
  <Link href={href} passHref>
    <a tabIndex={tabindex} className={'menu-item ' + className} role='menuitem'>
      {children}
    </a>
  </Link>
);

const SignOutMenuItem = ({ tabIndex, signout }) => {
  return (
    <button onClick={() => signout()} tabIndex={tabIndex} className='menu-item'>
      Sign out
    </button>
  );
};

export default TopBar;
