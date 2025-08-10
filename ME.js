document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme");
  const body = document.body;

  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.add("light-mode");
  }

  updateButtonStyle();
  updateButtonLabels(body.classList.contains("dark-mode"));

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateButtonStyle();
    updateButtonLabels(isDark);
  });

  function updateButtonStyle() {
    if (body.classList.contains("dark-mode")) {
      themeToggle.style.backgroundColor = "deeppink";
      themeToggle.style.color = "white";
      themeToggle.textContent = "Light"; 
    } else {
      themeToggle.style.backgroundColor = "hotpink";
      themeToggle.style.color = "black";
      themeToggle.textContent = "Dark";  
    }
  }

  function updateButtonLabels(isDark) {
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => {
      btn.style.borderColor = isDark ? "deeppink" : "hotpink";
      btn.style.color = isDark ? "white" : "black";
    });
  }
});

