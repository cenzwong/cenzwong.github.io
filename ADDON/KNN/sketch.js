// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// KNN Classification with Feature Extractor
// 1: https://youtu.be/KTNqXwkLuM4 
// 2: https://youtu.be/Mwo5_bUVhlA 
// 3: https://youtu.be/JWsKay58Z2g 


let video;
let features;
let knn;
let labelP;
let ready = false;
let x;
let y;
let label = 'nothing';

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  features = ml5.featureExtractor('MobileNet', modelReady);
  knn = ml5.KNNClassifier();
  labelP = createP('need training data');
  labelP.style('font-size', '32pt');
  x = width / 2;
  y = height / 2;
  button = createButton('Label 1');
  button.position(19, 19);
  button.mousePressed(addLabel1);
}

function addLabel1(){
    const logits = features.infer(video);
    knn.addExample(logits, '1');
    console.log('1 add');
}


var warningMsg = "📍📍📍📍📍📍📍📍📍📍\
                  📍📍📍No one here alarm 📍📍📍\
                  📍📍📍No one here alarm 📍📍📍\
                  📍📍📍No one here alarm 📍📍📍\
                  📍📍📍📍📍📍📍📍📍📍📍📍📍";



var lastLabel;
function goClassify() {
  const logits = features.infer(video);
  knn.classify(logits, function(error, result) {
    if (error) {
      console.error(error);
    } else {
      label = result.label;
      labelP.html(result.label);
      
      /////
      // Create WebSocket connection.
      
      
      let thisLabel = label;
      if(lastLabel != thisLabel){
        var ws = new WebSocket('ws://localhost:8765');
        console.log(label+" is detected");
        
        ws.onopen = function() {           
          // Web Socket is connected, send data using send()
          //ws.send("Message to send");
          ws.send(label);
          if(label=='0'){
            sendTgMessage(warningMsg);
            console.log("Telegram sent");
          }
          console.log("Opened WS");

        };

       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          console.log(evt.data);
       };

       ws.onclose = function() { 
          // websocket is closed.
          console.log("Closed WS");
       };

        //ws.close();
      }
      lastLabel = thisLabel;
      
      ////

      goClassify();
    }
  });
}

function keyPressed() {
  const logits = features.infer(video);
  if (key == '1') {
    knn.addExample(logits, '1');
    console.log('1 add');
  } else if (key == '2') {
    knn.addExample(logits, '2');
    console.log('2 add');
  } else if (key == '3') {
    knn.addExample(logits, '3');
    console.log('3 add');
  } else if (key == '4') {
    knn.addExample(logits, '4');
    console.log('4 add');
  } else if (key == '5') {
    knn.addExample(logits, '5');
    console.log('5 add');
  } else if (key == '6') {
    knn.addExample(logits, '6');
    console.log('6 add');
  } else if (key == '7') {
    knn.addExample(logits, '7');
    console.log('7 add');
  } else if (key == '8') {
    knn.addExample(logits, '8');
    console.log('8 add');
  } else if (key == '9') {
    knn.addExample(logits, '9');
    console.log('9 add');
  } else if (key == '0') {
    knn.addExample(logits, '0');
    console.log('0 add');
  } 
  
  
  
  
  
  
  
  else if (key == 's') {
    save(knn, 'model.json');
    //knn.save('model.json');
  }
}

function modelReady() {
  console.log('model ready!');
  // Comment back in to load your own model!
  // knn.load('model.json', function() {
  //   console.log('knn loaded');
  // });
}

function draw() {
  background(0);
  fill(255);
  ellipse(x, y, 24);

  // if (label == 'left') {
  //   x--;
  // } else if (label == 'right') {
  //   x++;
  // } else if (label == 'up') {
  //   y--;
  // } else if (label == 'down') {
  //   y++;
  // }

  //image(video, 0, 0);
  if (!ready && knn.getNumLabels() > 0) {
    goClassify();
    ready = true;
  }
}

// Temporary save code until ml5 version 0.2.2
const save = (knn, name) => {
  const dataset = knn.knnClassifier.getClassifierDataset();
  if (knn.mapStringToIndex.length > 0) {
    Object.keys(dataset).forEach(key => {
      if (knn.mapStringToIndex[key]) {
        dataset[key].label = knn.mapStringToIndex[key];
      }
    });
  }
  const tensors = Object.keys(dataset).map(key => {
    const t = dataset[key];
    if (t) {
      return t.dataSync();
    }
    return null;
  });
  let fileName = 'myKNN.json';
  if (name) {
    fileName = name.endsWith('.json') ? name : `${name}.json`;
  }
  saveFile(fileName, JSON.stringify({ dataset, tensors }));
};

const saveFile = (name, data) => {
  const downloadElt = document.createElement('a');
  const blob = new Blob([data], { type: 'octet/stream' });
  const url = URL.createObjectURL(blob);
  downloadElt.setAttribute('href', url);
  downloadElt.setAttribute('download', name);
  downloadElt.style.display = 'none';
  document.body.appendChild(downloadElt);
  downloadElt.click();
  document.body.removeChild(downloadElt);
  URL.revokeObjectURL(url);
};

// ///////fetch/////////////////////////

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

let tgURLToken = "https://api.telegram.org/bot941539918:AAEA-WBRpCLWYgPKokrjsdJqjoykIe2CElc/";

  async function sendTgMessage(msg){
    let TGURL = tgURLToken + "sendMessage?chat_id=843999226&text=";
    sendHttpRequest('GET', TGURL+msg)
      .then(responseData => {
        //console.log(responseData);
        input.value('');
      })
      .catch(err => {
        //console.log(err, err.data);
      });
  }