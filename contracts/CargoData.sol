// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SensorData {
    uint256 private constant TEMPERATURE_THRESHOLD_MAX = 30;
    uint256 private constant TEMPERATURE_THRESHOLD_MIN = 10;

    uint256 private constant HUMIDITY_THRESHOLD_MAX = 90;
    uint256 private constant HUMIDITY_THRESHOLD_MIN = 30;

    uint256 private constant LIGHT_THRESHOLD_MAX = 90;
    uint256 private constant LIGHT_THRESHOLD_MIN = 10;
    
    struct DataPoint {
        uint256 temperature;
        uint256 ldr;
        uint256 humidity;
        uint256 timestamp;
    }

    DataPoint[] public dataPoints;

    function addData(uint256 _temperature, uint256 _ldr, uint256 _humidity) public {
        dataPoints.push(DataPoint(_temperature, _ldr, _humidity, block.timestamp));
    
        // Check temperature threshold
        if (_temperature >= TEMPERATURE_THRESHOLD_MAX || _temperature <= TEMPERATURE_THRESHOLD_MIN) {
            emit TemperatureThresholdExceeded(block.timestamp, _temperature);
        }

        // Check humidity threshold
        if (_humidity > HUMIDITY_THRESHOLD_MAX || _humidity < HUMIDITY_THRESHOLD_MIN) {
            emit HumidityThresholdExceeded(block.timestamp, _humidity);
        }

        // Check light threshold
        if (_ldr > LIGHT_THRESHOLD_MAX || _ldr < LIGHT_THRESHOLD_MIN) {
            emit LightThresholdExceeded(block.timestamp, _ldr);
        }
    }

    function getDataCount() public view returns (uint256) {
        return dataPoints.length;
    }

    function getData(uint256 _index) public view returns (DataPoint memory) {
        require(_index < dataPoints.length, "Index out of bounds");
        return dataPoints[_index];
    }

    // Events
    event TemperatureThresholdExceeded(uint256 indexed timestamp, uint256 temperature);
    event HumidityThresholdExceeded(uint256 indexed timestamp, uint256 humidity);
    event LightThresholdExceeded(uint256 indexed timestamp, uint256 ldr);
}
