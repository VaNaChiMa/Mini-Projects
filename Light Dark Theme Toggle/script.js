const checkBox = document.querySelector('input[name=theme]');
const bigMoon = document.querySelector('.bigSunMoon .fa-moon');
const bigSun = document.querySelector('.bigSunMoon .fa-sun');
const bigSunMoon = document.querySelector('.bigSunMoon')

checkBox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
    }
    bigMoon.classList.toggle('dayAndNight');
    bigSun.classList.toggle('dayAndNight');
    bigSunMoon.classList.toggle('dayAndNight');
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}