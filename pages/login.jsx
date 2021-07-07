import { MinLayout } from '~/layouts';
import Link from 'next/link';
import { MailIcon, LockClosedIcon, RefreshIcon } from '@heroicons/react/solid';
import { BrandInput, BrandSubmit } from '../components/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '~/hooks/use-auth';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Please enter the password'),
  email: Yup.string().email('Invalid email').required('Please enter the email'),
});

function Login() {
  const router = useRouter();
  const { user, signin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      setLoading(true);
      signin(values.email, values.password).catch((err) => {
        setServerError(
          err.code === 'auth/user-not-found'
            ? 'invalid username or password'
            : err.code
        );
        setLoading(false);
      });
    },
  });

  const { values, errors, handleChange, handleBlur, isValid, dirty } = formik;

  if (user?.email && user?.emailVerified) {
    router.push('/');
    return null;
  }

  if (user?.email && !user?.emailVerified) {
    router.replace('/verify-email');
    return null;
  }
  return (
    <MinLayout className='flex'>
      <div className='w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-2 bg-side-wave bg-no-repeat bg-left-bottom bg-contain'>
        <img
          src='/images/unlock.svg'
          className='hidden lg:block w-1/2  mx-auto'
        />
        {loading ? (
          <div className='flex flex-col justify-center items-center w-1/2'>
            <RefreshIcon className='animate-spin h-5 w-5 text-brand-purple-dark -mr-12 z-10'></RefreshIcon>
          </div>
        ) : (
          <form
            className='flex flex-col justify-center items-center w-1/2'
            onSubmit={formik.handleSubmit}>
            <img src='/images/yiu-logo.svg' className='w-20' />
            <h2 className='my-8 font-display font-bold text-3xl text-gray-700 text-center'>
              Welcome to YIU Academy
            </h2>
            {serverError ? (
              <span className='mb-4 text-base text-red-700 font-semibold'>
                Error : {serverError}
              </span>
            ) : null}
            <BrandInput
              autoComplete='email'
              name='email'
              type='email'
              placeholder='email'
              value={values.email}
              onChange={handleChange}
              error={errors?.email}
              onBlur={handleBlur}
              icon={
                <MailIcon
                  className='h-5 w-5 text-brand-purple-dark -mr-12 z-10'
                  aria-hidden='true'
                />
              }
            />
            <BrandInput
              className='mt-1'
              name='password'
              type='password'
              autoComplete='current-password'
              placeholder='password'
              value={values.password}
              onChange={handleChange}
              error={errors?.password}
              onBlur={handleBlur}
              icon={
                <LockClosedIcon
                  className='h-5 w-5 text-brand-purple-dark -mr-12 z-10'
                  aria-hidden='true'
                />
              }
            />
            <Link href='/forgot-password' passRef>
              <a className='self-end mt-4 text-white md:text-gray-600 font-bold'>
                Forgot password?
              </a>
            </Link>
            <BrandSubmit disabled={!dirty || !isValid}>Login</BrandSubmit>
          </form>
        )}
      </div>
    </MinLayout>
  );
}

export default Login;
