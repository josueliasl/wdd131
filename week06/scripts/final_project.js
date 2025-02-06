let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})

const jewerlies = [
    { 
        name: "Gemstone Bead Friendship Bracelet",
        description: "Adjustable bracelets with natural stones: Lava, Jasper, Tiger Eye, Lapis, Turquoise, Rhodonite.",
        cost: '580',
        imageUrl:
            "https://th.bing.com/th/id/OIP.RAK4LchDnlmOhE7XQC5UawAAAA?rs=1&pid=ImgDetMain"
    },
    {
        name: "Tibetan Energy Bracelet",
        description: "Colorful rocks foster balance, grounding, and happiness through Earth-aligned energy.",
        cost: '620',
        imageUrl:
            "https://th.bing.com/th/id/OIP.CLDj_N2i2cnHjXnxy11EpAHaHa?rs=1&pid=ImgDetMain"
    },
    {
        name: "Gold Bangle Bracelet",
        description: "A timeless gold bangle bracelet with a polished finish, perfect for any occasion.",
        cost: '500 ',
        imageUrl:
            "https://th.bing.com/th/id/R.2d5b828d20bbde95d33c4c56d5075e21?rik=CYIkTtu51R8pTg&pid=ImgRaw&r=0"
    },
    {
        name: "White Freshwater Pearl Necklace Sterling Hammerd Heart Toggle ",
        description: "Elegant white freshwater pearl necklace with a sterling silver hammered heart toggle clasp.",
        cost: '900',
        imageUrl:
            "https://i.etsystatic.com/10023393/r/il/31a455/1170581868/il_fullxfull.1170581868_q3ta.jpg"
    },
    {
        name: "Gold Jewellery Necklace ",
        description: "Elegant gold necklace showcasing timeless craftsmanship and radiant shine.",
        cost: '950',
        imageUrl:
            "https://th.bing.com/th/id/OIP.Z688wKqb297IunuyUt21MAAAAA?rs=1&pid=ImgDetMain"
    },
    {
        name: "Chain Pendant Necklace",
        description: "The Chain Pendant Necklace features a sleek chain with a stylish pendant.",
        cost: '1500',
        imageUrl:
            "https://th.bing.com/th/id/R.9328d857ade53e4762fe53421ccaa051?rik=80OQy%2fowF5x1Kw&pid=ImgRaw&r=0"
    },
    {
        name: "Beautiful Huggie Earrings",
        description: "Beautiful Huggie Earrings are sleek, close-fitting hoops that add elegance to any look.",
        cost: '350',
        imageUrl:
            "https://res.cloudinary.com/wolfandbadger/image/upload/s--wFl8Cv_D--/q_auto:eco/products/bijsfhbfmtsucq7payoh"
    },
    {
        name: "Diamond Earrings ",
        description: "Diamond Earrings feature brilliant diamonds for a timeless, elegant look.",
        cost: '400',
        imageUrl:
            "https://th.bing.com/th/id/OIP.KXkDzEnxP7ISghhdSYTyzwAAAA?rs=1&pid=ImgDetMain"
    },
    {
        name: "White gold hoop earrings",
        description: "White Gold Hoop Earrings offer a sleek, modern look with the shine of white gold.",
        cost: '280',
        imageUrl:
            "https://cdn-images.gabrielny.com/is/image/GabrielCo/Large/Gabriel-14K-White-Gold-40mm-Round-Classic-Inside-Out-Diamond-Hoop-Earrings~EG13821W45JJ-2.jpg"
    },
]  

createjewerlyCard(jewerlies);

function createjewerlyCard(filteredJewerlies) {
    const jewerliesContainer = document.querySelector('.jewerlies');
    jewerliesContainer.innerHTML = "";

    if (filteredJewerlies.length === 0) {
        jewerliesContainer.innerHTML = "<p>No jewerlies found for the selected filter.</p>";
        return;
    }

    // Iterate over all temples and create cards
    filteredJewerlies.forEach(jewerly => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let description = document.createElement('p');
        let cost = document.createElement('p');
        let img = document.createElement('img');
        let purchase = document.createElement('button');
        let car = document.createElement('button');

        name.textContent = jewerly.name;
        description.innerHTML = `<span class='label'><strong></strong></span> ${jewerly.description}`;
        cost.innerHTML = `<span class='label'>$</strong></span> ${jewerly.cost}`;
        img.setAttribute('src', jewerly.imageUrl);
        img.setAttribute("alt", `${jewerly.jewerlyName} Jewerlies`);
        img.setAttribute('loading', 'lazy');

        purchase.innerHTML = '<strong>Purchase Now</strong>';
        purchase.addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push({name: jewerly.name, cost: jewerly.cost});

            localStorage.setItem('cart', JSON.stringify(cart));

            document.location.href = 'car.html';
        })

        car.innerHTML = '<strong>Add to car 🛒</strong>';
        car.addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            cart.push({name: jewerly.name, cost: jewerly.cost});
            console.log(JSON.stringify(cart));

            localStorage.setItem('cart', JSON.stringify((cart)));
            
        }),
    
        /**
        car.addEventListener('click')**/

        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(cost);
        card.appendChild(img);
        card.appendChild(purchase);
        card.appendChild(car);

        jewerliesContainer.appendChild(card);
    });
} 

let earringsAlone = document.querySelector('#earrings');
earringsAlone.addEventListener('click',() => {
    let earrings = jewerlies.filter(jewerly => jewerly.cost<401);
    createjewerlyCard(earrings)
})

let necklacesAlone = document.querySelector('#necklases');
  necklacesAlone.addEventListener('click', () =>{
    let necklases = jewerlies.filter(jewerly => jewerly.cost >700 && jewerly.cost <1501)
    createjewerlyCard(necklases)
})

let braceletesAlone = document.querySelector('#bracelets');
braceletesAlone.addEventListener('click', () =>{
    let braceletes = jewerlies.filter(jewerly => jewerly.cost >402 && jewerly.cost<630)
    createjewerlyCard(braceletes)
})

let homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () =>{
    let home = jewerlies.filter( jewerly=> jewerly)
    createjewerlyCard(home)
})
