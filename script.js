document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.getElementById("hearts-container");
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart-animation");
      heart.innerText = "♥";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heartsContainer.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    setInterval(createHeart, 300);
  });
  