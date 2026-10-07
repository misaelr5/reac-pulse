const periodButton = document.querySelector('.period-button');
const filterButton = document.querySelector('.filter-button');
const activityItems = [...document.querySelectorAll('.activity-item')];

const periods = ['Últimos 30 días', 'Últimos 7 días', 'Este año'];
let periodIndex = 0;

periodButton.addEventListener('click', () => {
  periodIndex = (periodIndex + 1) % periods.length;
  periodButton.innerHTML = `${periods[periodIndex]} <span>⌄</span>`;
});

filterButton.addEventListener('click', () => {
  const showingAll = activityItems.every((item) => item.hidden === false);
  activityItems.forEach((item, index) => {
    item.hidden = showingAll && index > 0;
  });
  filterButton.firstChild.textContent = showingAll ? 'Mostrar todo ' : 'Filtrar ';
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-link.is-active')?.classList.remove('is-active');
    link.classList.add('is-active');
  });
});
