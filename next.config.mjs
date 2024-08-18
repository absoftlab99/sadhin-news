/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.weprodevs.com'
            },
        ],
    }
}

export default nextConfig;