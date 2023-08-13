import contractAbi from "../constants/Contract";
import Web3 from 'web3';
import SensorData from "./SensorData";
import Event from "./Event";

export default class Blockchain{
    constructor(){
        this.web3 = new Web3(process.env.REACT_APP_BLOCKCHAIN_NETWORK);;
        this.contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        this.contractAbi = contractAbi;
        this.contractObject = new this.web3.eth.Contract(contractAbi, this.contractAddress);
        this.account = null;
        this.data = [];
    }
   
    async getData(index) {
        try {
            const data = await this.contractObject.methods.getData(index).call();
            const temperature = Number(data.temperature);
            const ldr = Number(data.ldr);
            const humidity = Number(data.humidity);
            const timestamp = new Date(Number(data.timestamp) * 1000);
            return new SensorData(temperature, ldr, humidity, timestamp);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getDataCount() {
        try {
            const data = await this.contractObject.methods.getDataCount().call();
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getEventData(eventName) {
        try {
            const latestBlock = Number(await this.web3.eth.getBlockNumber());
            const fromBlock = latestBlock <= 50 ? 0 : latestBlock - 50;
            const toBlock = 'latest';
            
            const options = {
                fromBlock,
                toBlock
            };

            const events = await this.contractObject.getPastEvents(eventName, options)
            .then(result=>{
                return result.map(event => {
                    const value = Number(event.returnValues[1]);
                    const milis = Number(event.returnValues[0]);
                    const timestamp = new Date(milis * 1000);
                    return new Event(value, eventName, timestamp);
                });
            });
            
            return events;
        } catch (error) {
            console.error('Error:', error);
        }
    }

}