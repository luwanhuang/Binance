var wsUri = "wss://stream.binance.com:9443/stream?streams=!miniTicker@arr";
var status = "close";
var websocket;

// function init()
// {
//   testWebSocket();
// }

function testWebSocket()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen()
{
  writeToScreen("CONNECTED");
  status = "open"
}

function onClose()
{
  writeToScreen("DISCONNECTED");
  status = "close"
}

function onMessage(evt)
{
  writeToScreen(evt.data);
  // websocket.close();
}

function onError(evt)
{
  writeToScreen(evt.data);
}

// function doSend(message)
// {
//   writeToScreen("SENT: " + message);
//   websocket.send(message);
// }

function writeToScreen(message)
{
  console.log(message);
}

const webtry=()=>{
  status === "open"? websocket.close(): testWebSocket();
}

// window.addEventListener("load", init, false);

export default webtry;