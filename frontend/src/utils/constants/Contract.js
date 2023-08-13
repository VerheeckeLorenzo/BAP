const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "humidity",
        "type": "uint256"
      }
    ],
    "name": "HumidityThresholdExceeded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ldr",
        "type": "uint256"
      }
    ],
    "name": "LightThresholdExceeded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "temperature",
        "type": "uint256"
      }
    ],
    "name": "TemperatureThresholdExceeded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_temperature",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ldr",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_humidity",
        "type": "uint256"
      }
    ],
    "name": "addData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "dataPoints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "temperature",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ldr",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "humidity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "temperature",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "ldr",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "humidity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct SensorData.DataPoint",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDataCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];


export default contractAbi;