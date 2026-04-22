export function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const section = document.createElement('div');
  section.classList.add('contact-wrapper');

  section.innerHTML = `
    <div class="contact-header">
      <h1 class="contact-title">Contacto</h1>
      <p class="contact-subtitle">Encuéntranos en Melchor Ocampo, México</p>
    </div>
    <div class="contact-body">
      <div class="contact-map">
        <img src="./img/map.png"alt="Ubicación de Rumbera" class="map-img">
        <a href="https://www.google.com/maps/place/La+Rumbera/@19.6993127,-99.1482827,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f599dc25bed7:0xec96cc721032f2c0!8m2!3d19.6993127!4d-99.1457078!16s%2Fg%2F11xs316myg?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="map-link">Ver en Google Maps →</a>
      </div>
      <div class="contact-info">
        <a href="https://wa.me/5215562537246" target="_blank" rel="noopener noreferrer" class="contact-btn whatsapp-btn">
          <span class="contact-btn-label">WhatsApp</span>
          <span class="contact-btn-value">+52 1 55 6253 7246</span>
        </a>
        <a href="https://www.facebook.com/people/Rumbera-Mariscos/pfbid0cX29ZBjb4ymVacuiqkQcFejcJgDEdTES7oLyvp8U2gmXoQrVcparSiQ15MMHR1iYl/" target="_blank" rel="noopener noreferrer" class="contact-btn facebook-btn">
          <span class="contact-btn-label">Facebook</span>
          <span class="contact-btn-value">Visitar página</span>
        </a>
      </div>
    </div>
  `;

  content.appendChild(section);
}