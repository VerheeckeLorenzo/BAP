from web3 import Web3
import requests
import time

# Set up Web3 instance with your Ganache local blockchain URL
ganache_url = "http://localhost:7545"  # Update with your Ganache URL
web3 = Web3(Web3.HTTPProvider(ganache_url))

# Load your contract ABI and address
contract_abi = [
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
]
contract_address = '0x54D5BB92AD01b7691c27079B2bb33a3837DEB8Ed'  # Your contract address

contract = web3.eth.contract(address=contract_address, abi=contract_abi)

while True:
    try:
        # Fetch data from your Raspberry Pi's Flask server
        response = requests.get('http://169.254.10.1:5000/sensor-data')
        sensor_data = response.json()

        # Upload data to your smart contract on Ganache
        # Here, you need to provide the appropriate values for temperature, ldr, and humidity
        temperature = int(sensor_data['temp'])
        ldr = int(sensor_data['ldr'])
        humidity = int(sensor_data['humidity'])

        # Send a transaction to addData function
        tx_hash = contract.functions.addData(temperature, ldr, humidity).transact({
            'from': web3.eth.accounts[0]})
        receipt = web3.eth.waitForTransactionReceipt(tx_hash)

        print(f'Data uploaded: Transaction hash: {tx_hash.hex()}')

    except Exception as e:
        print(f'Error: {e}')

    # Wait for n minutes before fetching and uploading data again
    time.sleep(30)
    