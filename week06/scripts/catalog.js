let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})

const articles = [
    
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.Q_uYz4lmRQ6nU0JxoYaKDAHaI_?pid=ImgDet&w=202&h=244&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.bcaw7MeEJHJiXE6W3KWwVAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.LDpMSUqmDXJ_x_YPSsqNVAHaLF?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.gGlePUibFwDGfDptQndReQAAAA?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.f6fbjN6jJB7MG2BRCmUSKwHaJJ?pid=ImgDet&w=202&h=249&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://onesimus.com.ph/wp-content/uploads/ONESIMUS-BARONG-PHILIP000013-A.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://http2.mlstatic.com/guayaberas-en-lino-y-algodon-100-yucatecas-D_NQ_NP_458411-MLM20566917553_012016-F.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OPHS.EioyKonsFc5UuA474C474?o=5&pid=21.1&w=160&h=220&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.75apcvvG2_DGAANQK05UGwHaJp?pid=ImgDet&w=202&h=262&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th?id=OPHS.7VyQW8jqV8p%2fyQ474C474&o=5&pid=21.1&w=160&h=220&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.56zDIVHh0tWTwZkqD0kg4QHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://i.etsystatic.com/31163052/r/il/2745c4/3335874799/il_1588xN.3335874799_juzy.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://i.pinimg.com/originals/66/dd/71/66dd71be4549c740b84b8c72070478f3.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.4lgcJA6uTTnyUztH6UV-xQHaJS?pid=ImgDet&w=202&h=253&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.lSICRoee9xma46RIHx3TDwHaFj?w=1080&h=810&rs=1&pid=ImgDetMain"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.R9i_OIfMje4RN9VwrYtKVgHaKC?pid=ImgDet&w=202&h=273&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.FTgNf2dDbgdWr459vTi7OQHaGp?pid=ImgDet&w=202&h=181&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.WCnvIaqJ1aN0SQbu5ZMI8wHaJQ?pid=ImgDet&w=202&h=252&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://i.etsystatic.com/25594680/r/il/2a2f47/4096814591/il_1080xN.4096814591_kk80.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.GxeJMSl1vcj1lrRZ1gEzPQHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.lqPTczpFX4AJyaZbghlvogHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.ft5spNMzxyaY3UloVbdd3AHaNK?pid=ImgDet&w=188&h=333&c=7&dpr=1.5"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://i.pinimg.com/736x/13/af/a4/13afa454f1c1ac6bd3d1675e703c0163.jpg"
    },
    { 
        name: "Guayabera",
        description: "Mexican design",
        cost: '100',
        imageUrl:
            "https://http2.mlstatic.com/D_NQ_NP_995755-MLM44013210127_112020-F.jpg"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.4YqTIWQPBX0k7AN62EdvLAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.3FCdbnxqGYpbtN2MQZVRqQHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.F_ZffSITxIKtrjnxSHpAbwHaJ3?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.fwr6h6oJBLTEGAZX4P0KOwAAAA?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qmKees-67pxd68yLXBCR9AHaLJ?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.87lCT9u9UlmiORO_CVuQYQHaL6?pid=ImgDet&w=197&h=317&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qqwKYK_xZzpTj4H0bvZpvwHaJ3?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.X_anVKvOlXrG_I--YLoEkAHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.H0wpAGRDYtXgME2cjOACyAAAAA?rs=1&pid=ImgDetMain"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.qh2EtuAhSuQjdrr-hCDU9AAAAA?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.sfI-uKxSOuPLFKKEWJSn5wHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.t8myEgHtw0mjmfMBCr25hgAAAA?pid=ImgDet&w=202&h=160&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.W0K8kgkUh_z7hkBx1IjrlgHaLG?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.nf8qcWpfdk5_biJBIJQMOQHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.SXixqSo6WaTsDaD7rENvygHaLG?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.UxXEMJHTRw0a_pFIQ48mUAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.IRZk_I67TruUXvobU7TbnwHaHo?pid=ImgDet&w=202&h=208&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.SNILOS2L1BlTFpPDcx6-EQHaKX?pid=ImgDet&w=202&h=283&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.sT7HHYVzBdhvoiVPcxBxxAHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.EWjHfep7YoDfZmxCozikZAHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.jacYpjCoIURTmemEyrrcFAHaLN?w=194&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.zqvzpzKACZ--OYn8Q2XDBQHaMP?w=194&h=321&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81E0t51zdYL._SL1500_.jpg"
    },
    { 
        name: "Dresses",
        description: "Be native",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.yLsOFXjOcf5cUct62IIFXgHaLN?w=194&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://i.pinimg.com/originals/ae/c9/bf/aec9bf6fb9a630c23942427047f335ba.jpg"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://i.pinimg.com/originals/0c/5d/98/0c5d9827a32476d256231443dbf0433e.jpg"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://img.artlogic.net/w_820,h_700,c_limit/exhibit-e/5b1e98ae6aa72cad108b4567/dac1e38e9673a75632ea60af6ed13730.jpeg"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.laM8fuTzivUGNagHxgNxOAAAAA?pid=ImgDet&w=192&h=325&c=7&dpr=1.5"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.T6_tN5-BShBbyA2DYid2HwHaM8?pid=ImgDet&w=189&h=331&c=7&dpr=1.5"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.G3u-cZS0vrpEVahkAx2XnwHaHa?rs=1&pid=ImgDetMain"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.O0PLIPX_aEDrfW_iZqi3vgHaJ6?pid=ImgDet&w=202&h=270&c=7&dpr=1.5"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.9mSKxj2fnHIqeTozBbDKtAHaHa?pid=ImgDet&w=202&h=202&c=7&dpr=1.5"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://i.pinimg.com/originals/03/ff/e2/03ffe25c1f1508b5d4eff8d0a4e69102.jpg"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.PUBeNIa5IrH6Vjf5gh0A6AHaJ3?w=149&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.6TUgqs8MplxKcjnAZs2ssAHaJ1?w=138&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.-EIug8dCNFUrEodB4fojLAHaE6?w=268&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.R-J0OfzJxC-SEhIWQrafzAHaLH?w=145&h=217&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.nHAE8H79xbQOslgK3LJyFQAAAA?w=144&h=217&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.EUielkem0IZcHQFi_nWRqgHaF1?w=252&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.C4FBlnAjf-VdnQuHUpJYRAHaE8?w=302&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.kNbcKF1-9WDd7IujExIiGgHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.Hj6MrYQBckCwPqz_Tc2xmQAAAA?pid=ImgDet&w=202&h=283&c=7&dpr=1.5"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.sAlyqJqRSNzq7G-Tl59-IAHaL3?w=123&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.NEujfwA1WzCRiHT-TSfLgAHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.y7i5ii4ZzGLwKK3OP8Ab9AAAAA?w=115&h=173&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.Sl2ImxOSjNXkldhOp85cYwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.BWFSvVipYuYxdGmxIrWLRwHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    { 
        name: "Carpet",
        description: "Beautify your home",
        cost: '100',
        imageUrl:
            "https://th.bing.com/th/id/OIP.EK2MYHhzKmEQ569CTj3RcwAAAA?w=276&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
]  

createarticleCard(articles);

function createarticleCard(filteredarticles) {
    const articlesContainer = document.querySelector('.articles');
    articlesContainer.innerHTML = "";

    if (filteredarticles.length === 0) {
        articlesContainer.innerHTML = "<p>No articles found for the selected filter.</p>";
        return;
    }

    // Iterate over all temples and create cards
    filteredarticles.forEach(article => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let description = document.createElement('p');
        let cost = document.createElement('p');
        let img = document.createElement('img');
        let purchase = document.createElement('button');
        let car = document.createElement('button');

        name.textContent = article.name;
        description.innerHTML = `<span class='label'><strong></strong></span> ${article.description}`;
        cost.innerHTML = `<span class='label'>$</strong></span> ${article.cost}`;
        img.setAttribute('src', article.imageUrl);
        img.setAttribute("alt", `${article.articleName}`);
        img.setAttribute('loading', 'lazy');

        purchase.innerHTML = '<strong>Purchase Now</strong>';
        purchase.addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push({name: article.name, cost: article.cost});

            localStorage.setItem('cart', JSON.stringify(cart));

            document.location.href = 'ticket.html';
        })

        car.innerHTML = '<strong>Add to car 🛒</strong>';
        car.addEventListener('click', ()=>{
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            cart.push({name: article.name, cost: article.cost});
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

        articlesContainer.appendChild(card);
    });
} 
let guayaberasAlone = document.getElementById('guayaberas');
    guayaberasAlone.addEventListener('click', () => {
       let guayaberas=articles.filter(article => article.name == 'Guayabera')
       createarticleCard(guayaberas)
    });

let dressesAlone = document.getElementById('dresses');
    dressesAlone.addEventListener('click', () => {
       let dresses=articles.filter(article => article.name == 'Dresses')
       createarticleCard(dresses)
    });

let carpetsAlone = document.getElementById('carpets');
    carpetsAlone.addEventListener('click', () => {
       let carpets=articles.filter(article => article.name == 'Carpet')
       createarticleCard(carpets)
    });

let homeButton = document.querySelector('#homeButton');
    homeButton.addEventListener('click', () =>{
        let home = articles.filter( article => article)
        createarticleCard(home)
    })