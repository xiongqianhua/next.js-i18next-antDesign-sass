/*
 * @Author: qianhua.xiong
 */
module.exports = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  distDir: 'dist',
  trailingSlash: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: `http://localhost:5000/api/:path*`,
        },
      ],
    }
  },
}