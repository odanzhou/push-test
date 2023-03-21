import appTools, { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  // tools: {
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://localhost:4000/api',
  //         changeOrigin: true,
  //       },
  //     },
  //   },
  // },
  // bff: {
  //   proxy: {
  //     '/api': 'http://localhost:4000/api',
  //   },
  // },
  // dev: {
  //   proxy: {
  //     'http://localhost:8080/api': 'http://localhost:4000/api',
  //   },
  // },
});
