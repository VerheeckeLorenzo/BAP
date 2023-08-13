class SensorData {
    constructor(temperature, ldr, humidity, timestamp) {
        this.temperature = temperature;
        this.ldr = ldr;
        this.humidity = humidity;
        this.timestamp = timestamp;
    }

    getFormattedDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return this.timestamp.toLocaleDateString('en-US', options);
    }
    
}

export default SensorData;
