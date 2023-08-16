# BAP: IoT on the Blockchain
Bachelor's thesis by Lorenzo Verheecke in order to graduate as bachelor Graphical & Digital Media from the Artevelde University of Applied Sciences.


## About The Project

I developed an application that takes data from a local blockchain, hosted by Ganache, and displays it on a dashboard application.



### Prerequisites

GanacheCLI
Brownie (python package)

Raspberry Pi 3+
Sensors:
- DHT11
- LDR
- MCP3008 (To read analog data of the LDR)

NPM/Node

### Installation

1. Download [Ganache](https://trufflesuite.com/ganache/)

2. Start a local blockchain network in Ganache

3. Clone this repo

4. Check if you have the contract in /build

5. In /frontend, change the .env.example to .env and fill in the details. Also run npm install!

6. Set up your RPI, clone (this repo)[https://github.com/VerheeckeLorenzo/BAP-rpi] and run the server.

7. Run /scripts/continuous_data_upload.py on your laptop.

8. Succes!
