console.log("Script loaded");

function enterSite() {
  document.getElementById("agePopup").style.display = "none";
  document.getElementById("mainContainer").style.display = "flex";
}

function denyAccess() {
  alert("Access Denied. You must be 18 or older.");
}
