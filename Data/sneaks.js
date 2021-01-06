var net = require('net');

var client = new net.Socket();
client.setNoDelay();
client.connect(1337, 'localhost', function(){
 console.log('Connected to TD Server')
 });
client.on('error',()=>{
 console.log("An error has occured");
 console.log("Open TouchDesigner Server before starting.");
});
client.on('data', (data) => {
 console.log(data.toString());
 client.end();
});
client.on('end', () => {
 console.log('disconnected from server');
});