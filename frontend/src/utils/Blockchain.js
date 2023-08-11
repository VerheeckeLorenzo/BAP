import contractAbi from "./constants/Contract";
import Web3 from 'web3';

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
            console.log('Sensor Data:', data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getDataCount() {
        try {
            const data = await this.contractObject.methods.getDataCount().call();
            console.log('Data Count:', data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

}