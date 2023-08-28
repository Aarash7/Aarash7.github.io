//  <!-- Setup and start animation! -->
var typed = new Typed("#element", {
  strings: ["Web Developer", "Android Developer", "Graphic Designer"],
  typeSpeed: 80,
  loop: true,
});

// Mobile Navigation Menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", bgcolor);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
  
});


// hide the menu when a click event occurs outside the menu




// Using Password to download CV
function promptbox() {
  var confirm = document.getElementById("prompt");
  var confirmBox = $("#prompt");
  var desc = $(".container");
  confirmBox.show();
  desc.hide();
  confirm.style.display = "flex";
}

//Show Password
function showPassword() {
  var x = document.getElementById("pdfPassword");
  var y = document.getElementById("eye");

  if (x.type === "password") {
    x.type = "text";
    y.classList.toggle("fa-eye-slash");
  } else {
    x.type = "password";
    y.classList.toggle("fa-eye-slash");
  }
}

//Download CV
function downloadpdf(fileName) {
  var x = document.getElementById("pdfPassword");
  var title = document.getElementById("heading");
  if (x.value == "#Ronaldo7") {
        //Set the File URL.
        var url = "Files/" + fileName;
    
        //Create XMLHTTP Request.
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "blob";
        req.onload = function () {
          //Convert the Byte Data to BLOB object.
          var blob = new Blob([req.response], { type: "application/octetstream" });
    
          //Check the Browser type and download the File.
          var isIE = false || !!document.documentMode;
          if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
          } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        };
        req.send();

        title.innerHTML = "Download Success";
        title.style.color = "Green";
        var confirmBox = $("#prompt");
        var desc = $(".container");
        confirmBox.hide();
        desc.show();
      } 
  if (x.value == ""){
        title.innerHTML = "Password Required";
        title.style.color = "#11279F";
        x.style.borderColor = "rgba(246, 214, 7, 0.921)";
  }
  else {
        title.innerHTML = "Incorrect Password!" ;
        title.style.color = "red";
        x.style.border = "2px solid red";
      }
}

//Cancel Download
function cancelDownload() {
  var confirmBox = $("#prompt");
  var desc = $(".container");
  confirmBox.hide();
  desc.show();
}



