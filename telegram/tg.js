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
  
  
function sendMsg(){
    sendTgMessage(input.value());
    messageRecord.html(messageRecord.html() +"<br/>"+ "<=" +input.value());
}



async function checkMsg(){
    let replyMsg = await getTgMessage();
    console.log("Message get", replyMsg);
    //messageRecord.html(messageRecord.html() +"<br/>"+ "=>" + getTgMessage());
}


  
  


  let tgURLToken = "https://api.telegram.org/bot941539918:AAEA-WBRpCLWYgPKokrjsdJqjoykIe2CElc/";

  async function sendTgMessage(msg){
    let TGURL = tgURLToken + "sendMessage?chat_id=843999226&text=";
    sendHttpRequest('GET', TGURL+msg)
      .then(responseData => {
        console.log(responseData);
      })
      .catch(err => {
        console.log(err, err.data);
      });
  }
  
  function getTgMessage(){
    let TGURL = tgURLToken + "getUpdates";
    sendHttpRequest('GET', TGURL)
      .then(responseData => {
        console.log(responseData);
        let lastMsgIndex = responseData.result.length;
        let lastMsg = responseData.result[lastMsgIndex-1].message.text;
        console.log(lastMsg);
        return lastMsg;
      })
      .catch(err => {
        console.log(err, err.data);
      });
  }