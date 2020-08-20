var tgURLToken = "https://api.telegram.org/bot"+ tgTokenDecode([2,11,181,236449],"UVVGSFUwMU9MVE5WWnpsUFNrbFJhVkF5T0VRd2IwSjRWMU5hYjFkNFNUVXlOV3M");
var cenz = priFac2val([2 , 7 , 7 , 761 , 11317]);

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
    messageRecord.html(messageRecord.html() +"=====waiting for reponse==============<br/>");
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
    sendTgMessage(urlJSON['name']+" replied: "+input.value());
    messageRecord.html(messageRecord.html() +"<br/>"+d.toLocaleTimeString() +"<=" +input.value());
}

function tgTokenDecode(priFac, myString){
    myReturn = priFac2val(priFac)+ ":" + atob(atob(myString)) + "/";
    return myReturn;
}

function priFac2val(priFacA){
    var Mul = 1;
    for(var i = 0; i < priFacA.length; i++){
        Mul = Mul*priFacA[i];
    }
    console.log("num: "+ Mul.toString());
    return Mul.toString();
}

  async function sendTgMessage(msg){
    let TGURL = tgURLToken + "sendMessage?chat_id="+ cenz +"&text=";
    console.log("TGURL:"+ TGURL);

    sendHttpRequest('GET', TGURL+msg)
      .then(responseData => {
        //console.log(responseData);
        input.value('');
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
