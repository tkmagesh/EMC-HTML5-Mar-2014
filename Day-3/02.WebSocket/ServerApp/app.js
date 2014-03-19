var ws = require("nodejs-websocket");
var server = ws.createServer(function(conn){
	console.log("A new connection is established");
	conn.on("text",function(msg){
		server.connections.forEach(function(con){
			con.sendText(msg);
		});
	});
});
server.listen(9091);
console.log("Web Socket server listening on port 9091..!!")