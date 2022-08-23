/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org', 'www.themoviedb.org'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
// const nextConfig = {
//   images: {
//     domains: ['links.papareact.com', 'image.tmdb.org'],
//   },
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.tls = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.child_process = false;
//     }

//     return config;
//   },
//   future: {
//     webpack5: true,
//   },
//   fallback: {
//     fs: false,
//     tls: false,
//     net: false,
//     child_process: false,
//   },
// };

// module.exports = nextConfig;