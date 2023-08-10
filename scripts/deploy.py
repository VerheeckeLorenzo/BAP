from brownie import SimpleStorage, accounts
from brownie.network import gas_price
from brownie.network.gas.strategies import LinearScalingStrategy

gas_strategy = LinearScalingStrategy("60 gwei", "70 gwei", 1.1)
gas_price(gas_strategy)

def main():
    first_user = accounts[0]
    ss = SimpleStorage.deploy({
        "from": first_user,
        "gas_price": gas_strategy
    })
    print(ss)