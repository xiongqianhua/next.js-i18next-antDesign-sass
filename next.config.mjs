/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from 'node:url';
import i18n  from './next-i18next.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/v1.0/:path*',
  //       destination: `https://${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`, // 代理到后端 API 服务器
  //     },
  //   ];
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  ...i18n,
};

export default nextConfig;
