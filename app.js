function login(){
  localStorage.setItem("user","yes");
  alert("Logged in");
  window.location="index.html";
}

function logout(){
  localStorage.removeItem("user");
  localStorage.removeItem("premium");
  window.location="index.html";
}

function subscribe(){
  localStorage.setItem("premium","yes");
  alert("Premium activated");
}

function playVideo(isPremium){
  if(isPremium && localStorage.getItem("premium")!=="yes"){
    alert("This is premium content. Subscribe ₹199.");
    return;
  }
  window.location="video.html";
}
