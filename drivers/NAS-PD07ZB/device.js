'use strict';

const Homey = require('homey');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const { Cluster, debug, CLUSTER } = require('zigbee-clusters');
const TuyaSpecificCluster = require('../../lib/TuyaSpecificCluster')

Cluster.addCluster(TuyaSpecificCluster);

class NASPD07ZB extends ZigBeeDevice {
	zclNode;
	async onNodeInit({zclNode}) {
		this.zclNode = zclNode;
		this.printNode();

	this.registerCapability('alarm_motion', CLUSTER.ON_OFF);

	}
	
	onDeleted(){
		this.log("Smart PIR Motion Sensor removed")
	}

}

module.exports = NASPD07ZB;

