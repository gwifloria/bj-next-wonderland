const isProd = process.env.NODE_ENV === "production";
console.log(process.env.HOST);
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/bj-next-wonderland" : "",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/web-vital/:path*",
        destination: `http://localhost:4001/:path*`,
      },
    ];
  },
};

export default nextConfig;
