/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  webpack: (config, options) => {

    // config.target = "node";
    // config.node = { __dirname: false };
    
    config.module.rules.push(
      {
        test: /\.node$/,
        use: [{ loader: "node-loader" }],
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
      },
    );
 
    return config;
  },
}

module.exports = withPWA(nextConfig);
