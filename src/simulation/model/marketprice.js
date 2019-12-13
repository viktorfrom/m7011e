"use strict";

module.exports = class marketprice {

    constructor(name) {
        this.name = name;
        this.maxTotalProduction = 100;
        this.minTotalProduction = 0;
        this.currentTotalProduction = 0;
        this.electricityPrice = 0.4825; // 48.25 öre/kWh
        this.maxTotalProduction = 0;
        this.currentPrice = 0;
    }

    setTotalProduction(totalProduction) {
        if (totalProduction >= this.maxProduction) {
            this.currentProduction = this.maxProduction;
        } else if (totalProduction < this.minProduction) {
            this.currentProduction = this.minProduction;
        } else {
            this.currentProduction += totalProduction;
        }
    }

    setMaxProduction(test) {
        this.maxTotalProduction += test;
    }

    getName() {
        return this.name;
    }

    getCurrentTotalProduction() {
        return this.currentTotalProduction;
    }

    getElectricityPrice() {
        return this.electricityPrice;
    }

    getCurrentPrice() {
        return this.currentPrice;
    }

    status() {
        console.log("Region: " + this.name + ", market production: " +
            this.currentProduction.toPrecision(5) + "/" + this.maxTotalProduction.toPrecision(5) + " kWh " +
            ", current market price: " + this.currentPrice.toPrecision(3) + " öre/kWh " + "\n");
    }

    setMarketPrice() {
        this.currentPrice = 1 / (10 * (this.currentProduction / this.maxTotalProduction) * this.electricityPrice);
    }

    marketPrice() {
        this.setMarketPrice();

        // this.status();
        this.currentPrice = 0;
        this.maxTotalProduction = 0;
        this.currentProduction = 0;
    }
}
