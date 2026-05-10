import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'reseller1.hn.ss.bfcplatform.vn',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'theme.hstatic.net',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;