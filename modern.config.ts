// import fs from 'fs';
// import process from 'node:process';
import fs from 'fs';
import appTools, { defineConfig } from '@modern-js/app-tools';

// const rootDir = process.cwd();

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
  dev: {
    https: {
      key: fs.readFileSync('localhost-privkey.pem', 'utf8'),
      cert: fs.readFileSync('localhost-cert.pem', 'utf8'),
    },
    // https: true,
    // https: {
    //   key: fs.readFileSync(`${rootDir}/localhost-privkey.pem`),
    //   cert: fs.readFileSync(`${rootDir}/localhost-cert.pem`),
    // },
  },
  tools: {
    devServer: {
      proxy: {
        // '/api': {
        //   target: 'https://localhost:4000/api',
        //   changeOrigin: true,
        // },
        // '/socket.io': {
        //   target: 'ws://localhost:4000',
        //   changeOrigin: true,
        //   ws: true,
        // },
      },
    },
  },
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
