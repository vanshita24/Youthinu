var ImageKit = require('imagekit');

var imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLICKEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT,
  privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATEKEY,
});

//todo make this secure
const handler = async (req, res) => {
  try {
    const { file_id } = req.body;
    console.log('file_id', file_id);
    const resp = await imagekit.deleteFile(file_id);
    return res.status(200).json(resp);
  } catch (e) {
    console.error('error when deleting image', { e });
    return res.status(500).json('delete failed');
  }
};

export default handler;
