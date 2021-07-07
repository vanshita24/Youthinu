import { MinLayout } from '~/layouts';
import Link from 'next/link';
import { MailIcon, LockClosedIcon, RefreshIcon } from '@heroicons/react/solid';
import { BrandInput, BrandSubmit } from '../components/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useAuth } from '~/hooks/use-auth';
import { useRouter } from 'next/router';

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required('Please enter the password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  email: Yup.string().email('Invalid email').required('Please enter the email'),
  passwordConfirmation: Yup.string()
    .required('Please confirm the password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Register() {
  const router = useRouter();
  const { user, signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
      passwordConfirmation: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      setLoading(true);
      signup(values.email, values.password).catch((err) => {
        setServerError(
          err.code === 'auth/user-not-found'
            ? 'invalid username or password'
            : err.code
        );
        setLoading(false);
      });
    },
  });
  const { values, errors, handleChange, isValid, dirty } = formik;

  if (user?.email && user?.emailVerified) {
    router.push('/');
  }

  if (user?.email && !user?.emailVerified) {
    return router.replace('/verify-email');
  }

  return (
    <MinLayout className='flex'>
      <div className='w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-2 bg-side-wave bg-no-repeat bg-left-bottom bg-contain pb-4'>
        <img src='/images/test.svg' className='hidden lg:block w-3/4 mx-auto' />
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
              SignUp in YIU Academy
            </h2>
            {serverError ? (
              <span className='mb-4 text-base text-red-700 font-semibold'>
                Error : {serverError}
              </span>
            ) : null}
            <BrandInput
              name='email'
              type='email'
              placeholder='email'
              value={values.email}
              onChange={handleChange}
              error={errors?.email}
              icon={
                <MailIcon
                  className='h-5 w-5 text-brand-purple-dark -mr-12 z-10'
                  aria-hidden='true'
                />
              }
            />
            <BrandInput
              name='password'
              className='mt-8'
              type='password'
              placeholder='password'
              value={values.password}
              onChange={handleChange}
              error={errors?.password}
              icon={
                <LockClosedIcon
                  className='h-5 w-5 text-brand-purple-dark -mr-12 z-10'
                  aria-hidden='true'
                />
              }
            />
            <BrandInput
              name='passwordConfirmation'
              className='mt-8'
              type='password'
              placeholder='confirm password'
              value={values.passwordConfirmation}
              onChange={handleChange}
              error={errors?.passwordConfirmation}
              icon={
                <MailIcon
                  className='h-5 w-5 text-brand-purple-dark -mr-12 z-10'
                  aria-hidden='true'
                />
              }
            />
            <Link href='/login' passHref>
              <a className='self-end mt-4 text-white md:text-gray-600 font-bold'>
                Have account already? login
              </a>
            </Link>
            <BrandSubmit disabled={!dirty || !isValid}>Register</BrandSubmit>
          </form>
        )}
      </div>
    </MinLayout>
  );
}

export default Register;
