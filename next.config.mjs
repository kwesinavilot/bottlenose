/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ultrarumble.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'steamuserimages-a.akamaihd.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
