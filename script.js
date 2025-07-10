// Predefined message and phone number
const phoneNumber = "5573988511248";
const message = "Olá, tudo bem? Queria saber mais sobre o método Nutrielev ‍🔥";

const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(link => {
    link.href = whatsappLink;
  });

  // Handle WhatsApp button separately
  const whatsappButton = document.querySelector('.whatsapp-btn');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      window.location.href = whatsappLink;
    });
  }
});
