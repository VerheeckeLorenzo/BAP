class Event {
    constructor(value, eventType, timestamp) {
        this.value = value;
        this.eventType = eventType;
        this.timestamp = timestamp;
    }

    getFormattedDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return this.timestamp.toLocaleDateString('en-US', options);
    }

    getFormattedValue() {
        let formattedValue;
        switch (this.eventType) {
            case "LightThresholdExceeded":
                formattedValue = `${this.value}%`;
                break;
            case "TemperatureThresholdExceeded":
                formattedValue = `${this.value}°C`;
                break;
            case "HumidityThresholdExceeded":
                formattedValue = `${this.value}%`;
                break;
            default:
                break;
        }
        return formattedValue;
    }

    getFormattedEventType() {
        let formattedEventType;
        switch (this.eventType) {
            case "HumidityThresholdExceeded":
                formattedEventType = "Humidity Threshold Exceeded";
                break;
            case "TemperatureThresholdExceeded":
                formattedEventType = "Temperature Threshold Exceeded";
                break;
            case "LightThresholdExceeded":
                formattedEventType = "Light Threshold Exceeded";
                break;
            default:
                break;
        }
        return formattedEventType;
    }
}

export default Event;
