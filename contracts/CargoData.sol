// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SensorData {
    struct DataPoint {
        uint256 temperature;
        uint256 ldr;
        uint256 humidity;
        uint256 timestamp;
    }

    DataPoint[] public dataPoints;

    function addData(uint256 _temperature, uint256 _ldr, uint256 _humidity) public {
        dataPoints.push(DataPoint(_temperature, _ldr, _humidity, block.timestamp));
    }

    function getDataCount() public view returns (uint256) {
        return dataPoints.length;
    }

    function getData(uint256 _index) public view returns (DataPoint memory) {
        require(_index < dataPoints.length, "Index out of bounds");
        return dataPoints[_index];
    }
}
