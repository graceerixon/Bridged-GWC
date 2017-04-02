function selectMeOne() {
  document.getElementById("firstBox").checked = !document.getElementById("firstBox").checked;
  
  var e = document.getElementById("firstBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "   Communication,";
    
  }
}

function selectMeTwo() {
  document.getElementById("secondBox").checked = !document.getElementById("secondBox").checked;
  
  var e = document.getElementById("secondBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "  The Internet,";
  }
}

function selectMeThree() {
  document.getElementById("thirdBox").checked = !document.getElementById("thirdBox").checked;
  
  var e = document.getElementById("thirdBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "   Mobile Devices,";
  }
}

function selectMeFour() {
  document.getElementById("fourBox").checked = !document.getElementById("fourBox").checked;
  
  var e = document.getElementById("fourBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "   Social Media,";
  }
}

function selectMeFive() {
  document.getElementById("fiveBox").checked = !document.getElementById("fiveBox").checked;
  
  var e = document.getElementById("fiveBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "   Computers,";
  }
}

function selectMeSix() {
  document.getElementById("sixBox").checked = !document.getElementById("sixBox").checked;
  
  var e = document.getElementById("sixBox");
  
  if (e.checked) {
    var already = document.getElementById("display").innerText;
    document.getElementById("display").innerText = already + "   Word Processing,";
    
  }
}