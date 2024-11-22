function openCard(cardId) {
  const popup = document.getElementById('popup-card');
  const title = document.getElementById('popup-title');
  const image = document.getElementById('popup-image');
  const description = document.getElementById('popup-description');

  title.textContent = `Tarjeta ${cardId}`;
  image.src = `https://via.placeholder.com/500`;
  description.textContent = `Esta es la descripción de la tarjeta número ${cardId}.`;

  popup.classList.add('active');
}

function closePopup() {
  const popup = document.getElementById('popup-card');
  popup.classList.remove('active');
}

function hire() {
  const thankYou = document.getElementById('thank-you');
  document.getElementById('popup-card').classList.remove('active');
  thankYou.classList.add('active');
}

function closeThankYou() {
  const thankYou = document.getElementById('thank-you');
  thankYou.classList.remove('active');
}
