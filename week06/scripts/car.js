const table = document.createElement('table');

const cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cart.length === 0) {
    alert('Please add an item to the cart first.');
    document.location.href = 'final_project.html';
} else {
    const cart = JSON.parse(localStorage.getItem('cart'));

    let total = 0;
    const tr = document.createElement('tr');
    const productTitle = document.createElement('th');
    const priceTitle = document.createElement('th');

    productTitle.textContent = 'Product';
    priceTitle.textContent = 'Price'

    tr.appendChild(productTitle);
    tr.appendChild(priceTitle);

    table.appendChild(tr);


    cart.forEach(jewerly => {
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const price = document.createElement('td');
        const deleteButton = document.createElement('button');
        const deleteAppended = document.createElement('td');
        deleteAppended.appendChild(deleteButton);

        deleteButton.innerHTML = '❌';
        deleteButton.addEventListener('click', () => {
            const itemName = deleteButton.dataset.name;
            let cart = JSON.parse(localStorage.getItem('cart'));
            // cart = cart.filter(item => item.name !== itemName);

            let index = 0;
            let deleted = 0;
            cart.forEach((cartItem) => {
                if (cartItem.name == itemName && deleted == 0) {
                    cart.splice(index, 1);
                    deleted++;
                }
                index++;
            })
            localStorage.setItem('cart', JSON.stringify(cart));

            tr.remove();
            total -= parseFloat(jewerly.cost);
            totalAmount.innerHTML = `<strong>${total}</strong>`;

            console.log(cart.length);

            if (cart.length === 0) {
                alert('Your cart is empty. Redirecting to the home page');
                document.location.href = 'final_project.html'
            }

        });
        deleteButton.dataset.name = jewerly.name;


        name.textContent = jewerly.name;
        price.textContent = jewerly.cost;

        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(deleteAppended);

        table.appendChild(tr);

        total += parseFloat(jewerly.cost);



    });

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    let final_total = document.createElement('tr');
    let totalTextContent = document.createElement('td');
    let totalAmount = document.createElement('td');

    totalTextContent.innerHTML = "<strong>Total</strong>";
    totalAmount.innerHTML = `<strong>${total}</strong>`;

    final_total.appendChild(totalTextContent);
    final_total.appendChild(totalAmount);

    table.appendChild(final_total);

    document.querySelector("main").appendChild(table);
}
