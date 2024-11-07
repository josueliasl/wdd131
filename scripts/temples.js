const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})

let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;