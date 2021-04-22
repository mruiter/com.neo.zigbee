'use strict';

const Homey = require('homey');
const { debug } = require('zigbee-clusters');
debug(true);

class neozigbee extends Homey.App {
	
	onInit() {
		this.log('Neo Zigbee app is running...');


	}
	
}

module.exports = neozigbee;