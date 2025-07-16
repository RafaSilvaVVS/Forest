const divMenuMobile = document.querySelector('[data-menu]');
const containerMenuMobile = document.querySelector('[data-container]');
const btnMenuMobile = document.querySelector('[data-btn-menu]');

btnMenuMobile.addEventListener('click', (event) => {
  divMenuMobile.classList.toggle('invisible');
});

containerMenuMobile.addEventListener('click', (event) => {
  if (
    !event.target.contains(divMenuMobile) ||
    event.target.contains(divMenuMobile)
  ) {
    divMenuMobile.classList.toggle('invisible');
  }
});
