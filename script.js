var linkWpp = "https://api.whatsapp.com/send/?phone=5573988511248"

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
  
    links.forEach(link => {
      link.href = linkWpp;
    });
  
    // Tratando o botão WhatsApp separadamente
    const whatsappButton = document.querySelector('.whatsapp-btn');
    if (whatsappButton) {
      whatsappButton.addEventListener('click', () => {
        window.location.href = linkWpp;
      });
    }
  });
  