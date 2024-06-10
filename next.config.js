/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: "re_f5Fdwu2M_EvquuXhbWjCk8wjzzF2dXiHs",
    To_Email: "Aminsworld1262@gmail.com",
    PUBLIC_KEY:"b5JMYoj_iBF9JwTQB"
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
