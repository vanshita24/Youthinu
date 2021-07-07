import jwt_decode from 'jwt-decode';

export const deleteOldImage = async (fileID) => {
  try {
    const resp = await fetch('/api/delete-profile-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ file_id: fileID }),
    });
    return true;
  } catch (e) {
    return false;
  }
};

export function isValidToken(token) {
  if (token) {
    let decoded = jwt_decode(token);
    let isValid = decoded.exp > Date.now() / 1000;
    return isValid;
  }
  console.log('token', token);
  return false;
}
