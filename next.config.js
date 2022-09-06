/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'links.papareact.com',
      'image.tmdb.org',
      'www.themoviedb.org',
      'i.ytimg.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// webpack: (config, options) => {
//   config.module.rules.push({
//     test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
//     type: 'asset/resource',
//     generator: {
//       filename: 'static/chunks/[path][name].[hash][ext]',
//     },
//   });

//   return config;
// },
