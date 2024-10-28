module.exports = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  distDir: 'dist',
  trailingSlash: true,
}