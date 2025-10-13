alert("JS loaded!");

console.log("JS file loaded");
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");

  emailjs.init("YZ37YH0vTZOHKIdZ_");

  const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup-message');
  const popupText = document.getElementById('popup-text');

  function showPopup(message, duration = 3000) {
    popupText.textContent = message;
    popup.classList.remove('hidden');
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => popup.classList.add('hidden'), 300); // wait for animation
    }, duration);
  }

  if (form) {
    console.log("Form found");

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log("Form submit triggered");
      showPopup("Submitting...");

      emailjs.send('service_xt3y1yc', 'template_5p2bj4v', {
        from_name: form.elements['user_name'].value,
        from_email: form.elements['user_email'].value,
        subject: form.elements['subject'].value,
        message: form.elements['message'].value
      })
      .then(function() {
        showPopup('✅ Email sent successfully!');
        form.reset();
      }, function(error) {
        showPopup('❌ Failed to send email. Please try again.');
        console.error('EmailJS error:', error);
      });
    });
  } else {
    console.error("Form element not found");
  }
});

