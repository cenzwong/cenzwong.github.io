function openForm() {
  console.log("Opening Form");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  console.log("Closing Form");
  document.getElementById("myForm").style.display = "none";
}

function onClick_btnSned(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "cenzth@gmail.com",
    Password : "My name is Cenz.",
    To : '137763952@etlgr.com',
    From : "cenzth@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}