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



function sendTgMessage(msg){
  let TGURL = "https://api.telegram.org/bot941539918:AAEA-WBRpCLWYgPKokrjsdJqjoykIe2CElc/sendMessage?chat_id=843999226&text=";
  sendHttpRequest('GET', TGURL+msg)
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data);
    });
}

function openForm() {
  console.log("Opening Form");
  document.getElementById("myForm").style.display = "block";

  sendTgMessage("Someone Open your chatbox");

}

function closeForm() {
  console.log("Closing Form");
  document.getElementById("myForm").style.display = "none";
//   console.log(document.getElementById("txt").textContent());
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "cenzth",
//     Password : "My name is Cenz.",
//     To : '137763952@etlgr.com',
//     From : "cenzth@gmail.com",
//     Subject : "You have a invitation",
//     Body : "document.getElementById('txt').textContent"
// }).then(
//   // message => alert(message)
// );
  sendTgMessage("Someone Close your chatbox");
}

function onClick_btnSned(){
  //var person = prompt("Please enter your name", "Iron Man");
  // if (person != null) {
  //   // document.getElementById("demo").innerHTML =
  //   // "Hello " + person + "! How are you today?";
  //   //alert("Dear ",person, ", message has been sent");
  // }
  let name = document.getElementById('nme').value;
  let message = document.getElementById('txt').value;
  sendTgMessage(name+" said: "+message);
  alert("Dear "+ name   + ",\r\nmessage has been sent");
}