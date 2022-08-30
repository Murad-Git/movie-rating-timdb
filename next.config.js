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
