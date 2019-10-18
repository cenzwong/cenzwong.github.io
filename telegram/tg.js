const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
      if (response.status >= 400) {
        // !response.ok
        return response.json().then(errResData => {
          const error = new Error('Something went wrong!');
          error.data = errResData;
          throw error;
        });
      }
      return response.json();
    });
  };
  

  function setup() {
    //createCanvas(400, 400);

    
    input = createInput();
    input.position(20, 65);
  
    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(sendMsg);
  
    messageRecord = createElement('p', ' ');
    
  }
  
  function draw() {
    //checkMsg();
    
 
  }

var myVar = setInterval(myTimer, 1000);


function myTimer() {
 
  //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  setTimeout(function(){ getTgMessage(); }, 1500);
}
  
  
function sendMsg(){
  var d = new Date();
    sendTgMessage(input.value());
    messageRecord.html(messageRecord.html() +"<br/>"+d.toLocaleTimeString() +"<=" +input.value());
}

  let tgURLToken = "https://api.telegram.org/bot941539918:AAEA-WBRpCLWYgPKokrjsdJqjoykIe2CElc/";

  async function sendTgMessage(msg){
    let TGURL = tgURLToken + "sendMessage?chat_id=843999226&text=";
    sendHttpRequest('GET', TGURL+msg)
      .then(responseData => {
        //console.log(responseData);
        input.value() = 0;
      })
      .catch(err => {
        //console.log(err, err.data);
      });
  }
  
  let lastUpdatesID = 0;

  function getTgMessage(){
     var d = new Date();
    let TGURL = tgURLToken + "getUpdates?offset=" + lastUpdatesID;
    //console.log(TGURL);
    sendHttpRequest('GET', TGURL)
      .then(responseData => {
        //console.log(responseData);
        let lastMsgIndex = responseData.result.length;
        lastUpdatesID = responseData.result[lastMsgIndex-1].update_id
        let lastMsg = responseData.result[lastMsgIndex-1].message.text;
        if(lastMsgIndex >= 2){
          messageRecord.html(messageRecord.html() +"<br/>"+d.toLocaleTimeString() +"=>" +lastMsg);
        }
        //console.log(lastMsg);

      })
      .catch(err => {
        console.log(err, err.data);
      });
  }