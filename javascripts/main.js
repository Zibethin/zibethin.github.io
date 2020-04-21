var contact = document.getElementById("google");
var contactDetail = document.getElementById("contact-detail");

contact.onclick = function () {
    if (contactDetail.style.visibility == "hidden") {
        contactDetail.style.visibility = "visible";
        contactDetail.style.opacity = "100";
    }
    else {
        contactDetail.style.visibility = "hidden";
        contactDetail.style.opacity = "0";
    }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showMenu() {
  var x = document.getElementById("menu-right");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
