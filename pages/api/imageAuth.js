var ImageKit = require('imagekit');

var imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLICKEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT,
  privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATEKEY,
});

const handler = async (req, res) => {
  const authenticationParameters = imagekit.getAuthenticationParameters();
  return res.status(200).json(authenticationParameters);
};

export default handler;
