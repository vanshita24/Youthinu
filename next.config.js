module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=86400', // Matched parameters can be used in the value
          },
        ],
      },
    ];
  },
  images: {
    loader: 'imgix',
    path: 'https://ik.imagekit.io/uyxq33mbjp/',
  },
};
