const SOCKET_SERVER = "http://localhost:8080";
// const SOCKET_SERVER = "https://dragons-api.herokuapp.com/";
var socket = io.connect(SOCKET_SERVER);

socket.on('turn', function(msg){
  console.log(msg);
});
