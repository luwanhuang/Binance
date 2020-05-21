import React, { useState } from 'react';
import Nevigation from './components/nevigation';
import FormAll from './components/form';
import SockJS from 'sockjs-client';


function App() {
  var sock = new SockJS('http://stream.binance.com/stream?streams=!miniTicker@arr.com/my_prefix');
  sock.onopen = function() {
      console.log('open');
      sock.send('test');
  };
 
  sock.onmessage = function(e) {
      console.log('message', e.data);
      sock.close();
  };
 
  sock.onclose = function() {
      console.log('close');
  };
  const [keyword,setKeyword] = useState("")

  return (
    <div className="App">
      <Nevigation setKeyword = {setKeyword}/>
      <FormAll keyword = {keyword}/>
    </div>
  );
}

export default App;
