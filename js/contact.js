const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const recipient = contactForm.dataset.recipient;
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.querySelector("#form-note").textContent = "Your email app should open with your message ready to send.";
    window.location.href = mailto;
  });
}
