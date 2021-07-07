import Main from '~/layouts/main';
import UserProfileForm from '~/components/UserProfile/Form';
import ChangePassword from '~/components/UserProfile/ChangePassword';
import UploadPhoto from '~/components/UserProfile/UploadPhoto';
import AvatarCard from '~/components/UserProfile/AvatarCard';
import Actions from '~/components/UserProfile/Actions';
import { parseGQLError, KnownErrors } from '../lib/error-parser';
import { MainFooter } from '~/components/Footers';
import { LoadingScreenSmall } from '~/components/LoadingScreens';
import { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { useRequireAuth } from '~/hooks';

import { customerQuery, updateSessionCustomerAvatar } from '../graphql';

const titlesMap = {
  profile: {
    subtext: 'View/Update your profile',
    title: 'My Profile',
    buttonText: 'View/Update Profile',
  },
  photo: {
    subtext: 'Upload your photo',
    title: 'My Avatar',
    buttonText: 'Upload Photo',
  },
  changePassword: {
    subtext: 'Change your password',
    title: 'Password',
    buttonText: 'Change Password',
  },
};

export default function UserProfile() {
  const auth = useRequireAuth('/');
  const [selectedMenu, setSelectedMenu] = useState('profile');
  const [customer] = useQuery({
    query: customerQuery,
  });
  const [updatedCustomerAvatar, updateAvatar] = useMutation(
    updateSessionCustomerAvatar
  );

  const { fetching: updateAvatarFetching, error: updateAvatarError } =
    updatedCustomerAvatar;

  const {
    data: userProfile,
    fetching: profileFetching,
    error: profileError,
  } = customer;

  //Show loading screen when authenticating and fetching
  if (profileFetching || !auth) {
    return <LoadingScreenSmall />;
  }
  //Todo - find a better way to handle Errors
  if (profileError) {
    const resp = parseGQLError(profileError);
    if (resp !== KnownErrors.NO_DATA_FOUND)
      return <p>{JSON.stringify(profileError)}</p>;
  }

  const { sessionCustomer } = userProfile || {};
  const { avatar } = sessionCustomer || {};
  const { title, subtext } = titlesMap[selectedMenu];
  return (
    <Main className='flex flex-col' requireAuth={true}>
      <div className='flex-grow flex h-full w-full items-start my-6 justify-center'>
        <div className='w-full lg:w-[800px] bg-gray-50 flex flex-col lg:flex-row lg:shadow-md lg:rounded-lg overflow-hidden p-6'>
          <div className='w-full lg:w-80  flex flex-col'>
            <AvatarCard avatar={avatar} />
            <Actions
              onClick={(title) => setSelectedMenu(title)}
              buttons={titlesMap}
              selectedMenu={selectedMenu}
            />
          </div>
          <div className='flex-grow flex flex-col items-center'>
            <div className='justify-self-center w-full'>
              <div className='text-center py-2'>
                <h5 className='mt-3 text-lg text-gray-900 font-semibold  underline'>
                  {title}
                </h5>
                <span className='text-sm  text-gray-900 font-normal '>
                  {subtext}
                </span>
              </div>
              <div className='flex-grow py-2 px-6 h-full'>
                {selectedMenu === 'profile' ? (
                  <UserProfileForm userProfile={sessionCustomer} />
                ) : null}
                {selectedMenu === 'photo' ? (
                  <UploadPhoto
                    userProfile={sessionCustomer}
                    updateAvatar={updateAvatar}
                    loading={updateAvatarFetching}
                  />
                ) : null}
                {selectedMenu === 'changePassword' ? <ChangePassword /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </Main>
  );
}
