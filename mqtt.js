'use strict';
const mqtt = require('mqtt')
const localMQTTClient = mqtt.connect('mqtt://localhost');
const TOPIC = 'rtbigdata';

localMQTTClient.on('connect', () => {
    localMQTTClient.subscribe(TOPIC);
});
// Listener on message
localMQTTClient.on('message', (topic, message) => {
    let msg = null;
    try {
        msg = JSON.parse(message); 
    } catch (err) {
        console.log(topic, "JSON error")
        return false
    }
    if (typeof msg === "object" && msg !== null) console.log(topic, msg)
});
