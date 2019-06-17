function openForm() {
  console.log("Opening Form");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  console.log("Closing Form");
  document.getElementById("myForm").style.display = "none";
  Email.send({
    Host : "smtp.gmail.com",
    Username : "cenzth",
    Password : "My name is Cenz.",
    To : '137763952@etlgr.com',
    From : "cenzth@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
if(message == "OK"){
  alert("Sent.");
}
}

function onClick_btnSned(){

}