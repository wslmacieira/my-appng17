// import { HttpsProxyAgent } from "https-proxy-agent";

// const proxyConfig = [{
//   context: '/api',
//   // target: 'http://your-remote-server.com:3000',
//   target: 'https://jsonplaceholder.typicode.com',
//   secure: false,
// //   "bypass": function (req, res, proxyOptions) {
// //     if (req.headers.accept.includes('html')) {
// //         console.log('Skipping proxy for browser request.');
// //         return '/index.html';
// //     }
// //     req.headers['X-Custom-Header'] = 'yes';
// // }
// "pathRewrite": {
//   "^/api": ""
// },
// "changeOrigin": true,
// "logLevel": "debug"
// }];

// export default (proxyConfig) => {
//   const proxyServer = 'http:proxy.wsldev:8080';
//   if (proxyServer) {
//     const agent = new HttpsProxyAgent(proxyServer);
//     console.log('Using corporate proxy server: ' + proxyServer);

//     for (const entry of proxyConfig) {
//       entry.agent = agent;
//     }
//   }

//   return proxyConfig;
// };