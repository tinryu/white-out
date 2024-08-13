/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.dicebear.com',
            port: '',
            pathname: '/8.x/adventurer/**',
          },
        ],
      },
      reactStrictMode: false,
};

export default nextConfig;
