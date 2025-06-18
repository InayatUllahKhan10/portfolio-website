const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener("mouseover", function() {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function() {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// Sidebar toggles
menu.addEventListener("click", function() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// ✅ EmailJS Integration
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("fxba5xMgo0Y2uxoBh"); // ✅ Replace with your public key

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_o4nam3k", "template_sfdqpot", this) // ✅ Replace with your Service ID & Template ID
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send message. Please try again.");
      });
  });
});
