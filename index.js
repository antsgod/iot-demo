//1.引入阿里云IoT的sdk
const iot = require('alibabacloud-iot-device-sdk');

//2.设备属性
const device = iot.device({
    productKey: "a10T2IKi4lE",
    deviceName: "demoproduct_device01",
    deviceSecret: "effd08a04c598238228c309ecba6087c",
    regionId: "cn-shanghai"
});

device.on('connect', ()=> {
    console.log('connect successfully');

    device.subscribe('/a10T2IKi4lE/demoproduct_device01/user/get')
    console.log('connect successfully');

    var msgId = 1;
    setInterval(() => {
        msgId++;
        device.publish('/a10T2IKi4lE/demoproduct_device01/user/update','hello world'+msgId);
    },5000);

    //监听message事件
    device.on('message',(topic,payload) => {
        console.log(topic,payload.toString());
    });


});
