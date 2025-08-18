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
      themeToggle.style.backgroundColor = "#00F5D4";
      themeToggle.style.color = "#F9FAFB";
      themeToggle.textContent = "Light"; 
    } else {
      themeToggle.style.backgroundColor = "#00F5D4";
      themeToggle.style.color = " #0D1117";
      themeToggle.textContent = "Dark";  
    }
  }

  function updateButtonLabels(isDark) {
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => {
      btn.style.borderColor = isDark ? "#00F5D4" : "#00F5D4";
      btn.style.color = isDark ? "#F9FAFB" : " #0D1117";
    });
  }
});

