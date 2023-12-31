/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: "re_f5Fdwu2M_EvquuXhbWjCk8wjzzF2dXiHs",
    To_Email: "paulsontiti@gmail.com",
    PUBLIC_KEY:"X1uWzzlDGGXJyMl09"
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
