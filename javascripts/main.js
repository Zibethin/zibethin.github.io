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
