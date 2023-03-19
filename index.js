document.querySelector("form").addEventListener("submit", sendMessage);

function sendMessage(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value


  if (name.length <= 0) {
    alert("Sorry!😕 Unname person can't message to Mohd Razaa Khan");
  }
  else if (email.length <= 0) {
    alert(`Sorry!😕 ${name}, Mohd Razaa khan can't back to you without an E-mail`);
  }
  else if (message.length <= 0) {
    alert(`${name}, 😕Please type something in message`)
  }

  else if (name.length > 0 || email.length > 0 || message.length > 0) {
    alert(`Thankyou😊! ${name}, Mohd Razaa khan will back to you soon!`)
    window.location.reload();
  }
}



// To make tootip visible
document.querySelector("#discord").addEventListener("mouseover", toolTipIn);
function toolTipIn() {
  document.querySelector(".pTag").style.visibility = "visible"
}
// to make tooltip hidden
document.querySelector("#discord").addEventListener("mouseout", toolTipOut);
function toolTipOut() {
  document.querySelector(".pTag").style.visibility = "hidden"
}


let body=document.querySelector("body");
let head=document.getElementsByClassName("aboutme");


function darkMode(){
  body.style.backgroundColor="darkslategrey"
  body.style.color="#fff";
 
}
function lightMode(){
  body.style.backgroundColor="#fff";
  body.style.color="darkslategrey";
  
}

    

