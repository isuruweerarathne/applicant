// Config to route local development API and all other environment apis
const PROXY_CONFIG = [
  {
    context: "/api/",
    target: "http://localhost:5000",
    secure: false,
    // changeOrigin: true,
    // xfwd: true, // Add the headers to say what address this was forwarded for
  },
];

module.exports = PROXY_CONFIG;
