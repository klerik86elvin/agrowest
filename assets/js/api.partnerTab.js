  const data = {
        "products": [
            {
                "id": 1,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/partner1.jpg"
            },
            {
                "id": 2,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/partner2.jpg"
            },
            {
                "id": 3,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/partner3.jpg"
            },
            {
                "id": 4,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product1.jpg"
            },
            {
                "id": 5,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product2.jpg"
            },
            {
                "id": 6,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product3.jpg"
            },
            {
                "id": 7,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product1.jpg"
            },
            {
                "id": 8,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product2.jpg"
            },
            {
                "id": 9,
                "price": "25.00",
                "name": "Ammofos",
                "category": "Apatit Phosagro",
                "slug": "product-inner.html",
                "image": "assets/images/product1.jpg"
            },

        ],
    }

const tablinks = document.querySelectorAll('.partners_countries button');
const wrapper = document.querySelector('.partner_list');

tablinks.forEach(element => {
    element.addEventListener('click' ,launchTabbing);
});

function launchTabbing(){
    let flag = true
    for(key in data){
        const arrayKey = data[key];
        var length = arrayKey.length;
        arrayKey.forEach(element => {
            const name = element.name;
            const category = element.category;
            const price = element.price;
            const id = element.id;
            const image = element.image;
            // wrapper.innerHTML = "";
           wrapper.insertAdjacentHTML('afterbegin', `
                <!-- partner card-->
                    <div class="partner_box">
                        <div class="partner_img">
                            <img src="assets/images/partner1.png" alt="">
                        </div>
                        <div class="partner_desc">
                            <a href="#" class="partner_name">Yantar</a>
                            <div class="partner_desc_cont">
                                "Yantar" ??ridilmi?? pendiri resepturas?? h??l?? 1965-ci ild?? Sovet ??ttifaq??nda i??l??nib haz??rlanm????d??r. ??oxumuz onun dad??n?? u??aql??????m??zdan tan??y??r??q. "Yantar" ??ridilmi?? pendiri x??susi ??ridici duz ??lav?? edilm??kl?? y??ks??k keyfiyy??tli qursaq pendir, ya?? v?? qaymaqdan haz??rlan??r.
                            </div>
                        </div>
                    </div>
                <!-- partner card end-->
            `)
        
        });

        //ddd
       
    }
     
}


