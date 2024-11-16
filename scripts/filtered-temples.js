let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    document.querySelector('h1').classList.toggle('show');
    document.querySelector('#navigation').classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    element.classList.toggle('active');
}

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: 'Provo City Center Temple',
        location: 'Provo, UT USA',
        dedicated: '2016, March, 20',
        area: 11922,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg'
    },
    {
        templeName: 'Rome Italy Temple',
        location: 'Rome Italy',
        dedicated: '2019, March, 10',
        area: 40000,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg'
    },
    {
        templeName: 'Nauvoo Illinois Temple',
        location: 'Nauvoo IL USA',
        dedicated: '2002, June, 27',
        area: 13200,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-756499-wallpaper.jpg'
    },
    {
        templeName: 'Philadelphia Pennsylvania Temple',
        location: 'Philadelphia PA US',
        dedicated: '2016 September, 18',
        area: 61466,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg'
    },
    {
        templeName: 'St. George Utah Temple',
        location: 'St. George UT USA',
        dedicated: '1877, April, 6',
        area: 143969,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-758796-wallpaper.jpg'
    },
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    const templesContainer = document.querySelector('.temples');
    templesContainer.innerHTML = ""; // Clear the container at the start

    // If no temples match the filter, display a message
    if (filteredTemples.length === 0) {
        templesContainer.innerHTML = "<p>No temples found for the selected filter.</p>";
        return;
    }

    // Iterate over all temples and create cards
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class='label'><strong>Location:</strong></span> ${temple.location}`;
        dedication.innerHTML = `<span class='label'><strong>Dedicated:</strong></span> ${temple.dedicated}`;
        area.innerHTML = `<span class='label'><strong>Size:</strong></span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templesContainer.appendChild(card);
    });
}

let oldTemplesButton = document.querySelector('#old');
oldTemplesButton.addEventListener('click',() => {
    let oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear()<1979);
    createTempleCard(oldTemples)
})

let newTemplesButton = document.querySelector('#new');
newTemplesButton.addEventListener('click', () =>{
    let newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear()>1980)
    createTempleCard(newTemples)
})

let largeTemplesButton = document.querySelector('#large');
largeTemplesButton.addEventListener('click', () =>{
    let largeTemples = temples.filter(temple => temple.area>9000)
    createTempleCard(largeTemples)
})

let smallTemplesButton = document.querySelector('#small');
smallTemplesButton.addEventListener('click', () =>{
    let smallTemples = temples.filter(temple => temple.area <9000)
    createTempleCard(smallTemples)
})
let homeTemplesButton = document.querySelector('#home');
homeTemplesButton.addEventListener('click', () =>{
    let home = temples.filter(temple => temple)
    createTempleCard(home)
})

