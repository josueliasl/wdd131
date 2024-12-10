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
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.Q_uYz4lmRQ6nU0JxoYaKDAHaI_?pid=ImgDet&w=202&h=244&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.bcaw7MeEJHJiXE6W3KWwVAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.LDpMSUqmDXJ_x_YPSsqNVAHaLF?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.gGlePUibFwDGfDptQndReQAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.f6fbjN6jJB7MG2BRCmUSKwHaJJ?pid=ImgDet&w=202&h=249&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://onesimus.com.ph/wp-content/uploads/ONESIMUS-BARONG-PHILIP000013-A.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://http2.mlstatic.com/guayaberas-en-lino-y-algodon-100-yucatecas-D_NQ_NP_458411-MLM20566917553_012016-F.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OPHS.EioyKonsFc5UuA474C474?o=5&pid=21.1&w=160&h=220&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.75apcvvG2_DGAANQK05UGwHaJp?pid=ImgDet&w=202&h=262&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th?id=OPHS.7VyQW8jqV8p%2fyQ474C474&o=5&pid=21.1&w=160&h=220&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.56zDIVHh0tWTwZkqD0kg4QHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://i.etsystatic.com/31163052/r/il/2745c4/3335874799/il_1588xN.3335874799_juzy.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://i.pinimg.com/originals/66/dd/71/66dd71be4549c740b84b8c72070478f3.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.4lgcJA6uTTnyUztH6UV-xQHaJS?pid=ImgDet&w=202&h=253&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.lSICRoee9xma46RIHx3TDwHaFj?w=1080&h=810&rs=1&pid=ImgDetMain"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.R9i_OIfMje4RN9VwrYtKVgHaKC?pid=ImgDet&w=202&h=273&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.FTgNf2dDbgdWr459vTi7OQHaGp?pid=ImgDet&w=202&h=181&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.WCnvIaqJ1aN0SQbu5ZMI8wHaJQ?pid=ImgDet&w=202&h=252&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://i.etsystatic.com/25594680/r/il/2a2f47/4096814591/il_1080xN.4096814591_kk80.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.GxeJMSl1vcj1lrRZ1gEzPQHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.lqPTczpFX4AJyaZbghlvogHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.ft5spNMzxyaY3UloVbdd3AHaNK?pid=ImgDet&w=188&h=333&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://i.pinimg.com/736x/13/af/a4/13afa454f1c1ac6bd3d1675e703c0163.jpg"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://cdn.shopify.com/s/files/1/1213/7282/products/huipil_negro_largo-1_530x@2x.jpg?v=1552968685"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.4YqTIWQPBX0k7AN62EdvLAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.3FCdbnxqGYpbtN2MQZVRqQHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.F_ZffSITxIKtrjnxSHpAbwHaJ3?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.fwr6h6oJBLTEGAZX4P0KOwAAAA?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qmKees-67pxd68yLXBCR9AHaLJ?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.87lCT9u9UlmiORO_CVuQYQHaL6?pid=ImgDet&w=197&h=317&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qqwKYK_xZzpTj4H0bvZpvwHaJ3?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.X_anVKvOlXrG_I--YLoEkAHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.H0wpAGRDYtXgME2cjOACyAAAAA?rs=1&pid=ImgDetMain"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qh2EtuAhSuQjdrr-hCDU9AAAAA?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.sfI-uKxSOuPLFKKEWJSn5wHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            "https://th.bing.com/th/id/OIP.t8myEgHtw0mjmfMBCr25hgAAAA?pid=ImgDet&w=202&h=160&c=7&dpr=1.5"
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
    },
    { 
        name: "",
        description: "",
        cost: '',
        imageUrl:
            ""
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

            document.location.href = 'ticket.html';
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
