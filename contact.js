console.log("JS loaded");

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  emailjs.init("YZ37YH0vTZOHKIdZ_"); // Your public key

  const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup-message');
  const popupText = document.getElementById('popup-text');

  function showPopup(message, duration = 3000) {
    popupText.textContent = message;
    popup.classList.remove('hidden');
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => popup.classList.add('hidden'), 300);
    }, duration);
  }

  if (!form) { console.error("Form not found"); return; }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submit triggered");
    showPopup("Submitting...");

    emailjs.send('service_xt3y1yc', 'template_5p2bj4v', {
      from_name: form.user_name.value,
      from_email: form.user_email.value,
      subject: form.subject.value,
      message: form.message.value
    })
    .then(function() {
      showPopup("✅ Email sent successfully!");
      form.reset();
    })
    .catch(function(error) {
      console.error("EmailJS error:", error);
      showPopup("❌ Failed to send email. Please try again.");
    });
  });
});
