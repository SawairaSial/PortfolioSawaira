

document.addEventListener("DOMContentLoaded", function () {
  // Select all navbar links with hash links (e.g., #about)
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default jump behavior

          const targetId = this.getAttribute("href"); // Get the target section ID
          const targetSection = document.querySelector(targetId); // Select the target section

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50, // Adjust for navbar height
                  behavior: "smooth" // Enable smooth scrolling
              });
          }
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });






  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".circular-progress").forEach(el => {
        let percent = el.getAttribute("data-percent");
        let circle = el.querySelector(".progress-circle");
        let dashOffset = 314 - (314 * percent) / 100;
        circle.style.strokeDashoffset = dashOffset;
    });
});

// buttom
function confirmDownload() {
    let userResponse = confirm("Do you want to download the CV?");
    if (userResponse) {
        alert("CV downloaded successfully!");
        let link = document.createElement("a");
        link.href = "cv.jpg"; // Update with your CV file path
        link.download = "cv.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Download cancelled.");
    }
}



