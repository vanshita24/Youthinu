import { BrandInput, BrandSubmit } from '../../components/Form';
import { useFormik } from 'formik';
import { useShowMessageLocal } from '../hooks';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
  current_password: Yup.string().required('Please enter the old password'),
  new_password: Yup.string()
    .required('Please enter the new password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirm_new_password: Yup.string()
    .required('Please re-enter the new password')
    .oneOf([Yup.ref('new_password'), null], 'New passwords must match'),
});

export default function ChangePassword() {
  const [MessageLabel, setServerMessage] = useShowMessageLocal();
  const formik = useFormik({
    initialValues: {
      current_password: '',
      new_password: '',
      confirm_new_password: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: (values) => {
      const { current_password, new_password } = values;
      handleReset();
      firebase
        .auth()
        .signInWithEmailAndPassword(
          firebase.auth().currentUser.email,
          current_password
        )
        .then(function (user) {
          firebase
            .auth()
            .currentUser.updatePassword(new_password)
            .then(function (resp) {
              setServerMessage('Password changed sucessfully!');
            })
            .catch(function (err) {
              setServerMessage(err.code);
            });
        })
        .catch(function (err) {
          setServerMessage('Invalid old Password');
        });
    },
  });
  const { values, errors, handleChange, isValid, dirty, handleReset } = formik;
  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-col mt-6 justify-center flex-grow'>
      <MessageLabel />
      <BrandInput
        name='current_password'
        type='password'
        placeholder='Enter Current Password'
        value={values.current_password}
        onChange={handleChange}
        error={errors?.current_password}
        autoComplete='current-password'
      />

      <BrandInput
        name='new_password'
        type='password'
        placeholder='Enter New Password'
        value={values.new_password}
        onChange={handleChange}
        error={errors?.new_password}
        autoComplete='new-password'
      />
      <BrandInput
        name='confirm_new_password'
        type='password'
        placeholder='Re-Enter New Password'
        value={values.confirm_new_password}
        onChange={handleChange}
        error={errors?.confirm_new_password}
        autoComplete='new-password'
      />

      <div className='flex item-center justify-end flex-grow'>
        <BrandSubmit disabled={!dirty || !isValid}>Change</BrandSubmit>
        <BrandSubmit onClick={handleReset} className='ml-6 bg-gray-300'>
          Cancel
        </BrandSubmit>
      </div>
    </form>
  );
}
