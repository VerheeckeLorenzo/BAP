from brownie import SensorData, accounts, network
from brownie.network import gas_price
from brownie.network.gas.strategies import LinearScalingStrategy

gas_strategy = LinearScalingStrategy("60 gwei", "70 gwei", 1.1)
gas_price(gas_strategy)

def main():
    # Select the appropriate account to interact with the contract
    deployer = accounts[0]

    # Replace 'YOUR_CONTRACT_ADDRESS' with the actual contract address
    contract_address = '0x89C438058f48F2E50635B24B16BBa8ed45dED0Bb'

    # Connect to the deployed contract
    sensor_data = SensorData.at(contract_address)

    # Call the addData() method to store new sensor data
    count = sensor_data.getDataCount()

    # Wait for the transaction to be mined
    required_confs = 1  # Adjust the number of confirmations as needed
    count.wait(required_confs)

    data = sensor_data.getData()

    data.wait(required_confs)
    print(data)
    # # Select the appropriate account to interact with the contract
    # deployer = accounts[0]

    # # Replace 'YOUR_CONTRACT_ADDRESS' with the actual contract address
    # contract_address = '0x89C438058f48F2E50635B24B16BBa8ed45dED0Bb'

    # # Connect to the deployed contract
    # sensor_data = SensorData.at(contract_address)

    # # Call the addData() method to store new sensor data
    # temperature = 25
    # ldr = 350
    # humidity = 60
    # tx = sensor_data.addData(temperature, ldr, humidity, {'from': deployer,"gas_price": gas_strategy})

    # # Wait for the transaction to be mined
    # required_confs = 1  # Adjust the number of confirmations as needed
    # tx.wait(required_confs)

def readData():
     # Select the appropriate account to interact with the contract
    deployer = accounts[0]

    # Replace 'YOUR_CONTRACT_ADDRESS' with the actual contract address
    contract_address = '0x89C438058f48F2E50635B24B16BBa8ed45dED0Bb'

    # Connect to the deployed contract
    sensor_data = SensorData.at(contract_address)

    # Call the addData() method to store new sensor data
    count = sensor_data.getDataCount()

    # Wait for the transaction to be mined
    required_confs = 1  # Adjust the number of confirmations as needed
    count.wait(required_confs)

    data = sensor_data.getData()

    data.wait(required_confs)
    print(data)

if __name__ == "__main__":
    main()
