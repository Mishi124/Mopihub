function enterSite() {
  document.getElementById("agePopup").style.display = "none";
  document.getElementById("mainContainer").style.display = "flex";

  const grid = document.getElementById("videoGrid");
  const imageURL = "https://i.ibb.co/SXy9FcgL/download.jpg";

  // Inject 7 fake video blocks
  for (let i = 0; i < 7; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "video-link";

    const loader = document.createElement("div");
    loader.className = "loader";

    link.appendChild(loader);
    grid.appendChild(link);

    // Show loader immediately
    setTimeout(() => {
      loader.style.display = "block";
    }, 0);
  }
}

function denyAccess() {
  alert("Access Denied. You must be 18 or older.");
}
