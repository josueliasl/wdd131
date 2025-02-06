
const cardNumber = document.getElementById('cardNumber');

cardNumber.addEventListener('input', (e) => {
    let input = e.target.value.replace(/\D/g, '');
    input = input.substring(0, 16);
    const formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formattedInput;
})


const purchase = document.getElementById('purchase_my_jewerlies')
purchase.addEventListener('click', (e) => {
    localStorage.removeItem("cart");
    e.preventDefault();
    alert('Thank you for your trust, we will soon contact you')
    document.location.href = 'catalog.html'
});

const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });