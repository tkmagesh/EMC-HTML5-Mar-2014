var ws = require("nodejs-websocket");
var server = ws.createServer(function(conn){
	console.log("A new connection is established");
	conn.on("text",function(msg){
		if (msg === "start"){
			var count = 0;
			var timer = setInterval(function sendTime(){
				conn.sendText("Current date and time is " + new Date().toString());
				if (++count >= 10) clearInterval(timer);
			},2000)
		} else {
			console.log("Invalid message " + msg);
		}

	});
});
server.listen(9091);
console.log("Web Socket server listening on port 9091..!!")