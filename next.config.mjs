/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Alterações na configuração do Webpack vão aqui
      // Lembre-se de retornar a configuração modificada
      return config;
    },
  };
  
  export default nextConfig;
  