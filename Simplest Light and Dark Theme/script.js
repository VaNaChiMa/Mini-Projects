const checkbox = document.getElementById('checkbox');
const bigMoon = document.querySelector('.bigSunMoon .fa-moon');
const bigSun = document.querySelector('.bigSunMoon .fa-sun');

checkbox.addEventListener('change', function () {
    document.body.classList.toggle('dark');
    bigMoon.classList.toggle('dayAndNight');
    bigSun.classList.toggle('dayAndNight');
})

