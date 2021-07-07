import ImageKit from 'imagekit-javascript';

const imageLib = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLICKEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT,
  authenticationEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_AUTH_ENDPOINT,
});

export default imageLib;
