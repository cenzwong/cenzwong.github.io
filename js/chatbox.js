function openForm() {
  console.log("Opening Form");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  console.log("Closing Form");
  document.getElementById("myForm").style.display = "none";
  console.log(document.getElementById("txt").textContent());
  Email.send({
    Host : "smtp.gmail.com",
    Username : "cenzth",
    Password : "My name is Cenz.",
    To : '137763952@etlgr.com',
    From : "cenzth@gmail.com",
    Subject : "You have a invitation",
    Body : "document.getElementById('txt').textContent"
}).then(
  // message => alert(message)
);

}

function onClick_btnSned(){
  // var person = prompt("Please enter your name", "Iron Man");
  // if (person != null) {
  //   // document.getElementById("demo").innerHTML =
  //   // "Hello " + person + "! How are you today?";
  //   alert("Dear ",person, ", message has been sent");
  // }
}