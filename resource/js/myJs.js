class Prodotto {
    constructor(name, weight, price, descr) {
        this.weight = weight;
        this.price = price;
        this.descr = descr;
        this.name = name;
    }
}

var listaPanettoni = []
var listaColombe = []

window.addEventListener('load', (event) => {
    upLoad();
    loadData("P");
});

function upLoad(){
    listaPanettoni.push(new Prodotto("Panettone al cioccolato","12.50", "32.00", "Un panettone con all'interno gocce di cioccolato, e ricoperto da cioccolato"));
    listaPanettoni.push(new Prodotto("Panettone alla crema","32.00", "80.00", "Un panettone con all'interno crema"));
    listaPanettoni.push(new Prodotto("Panettone al pistacchio","5.00", "25.00", "Un panettone con all'interno gocce di pistacchio, e ricoperto di pistacchio"));
    listaPanettoni.push(new Prodotto("Panettone al cioccolato","12.50", "32.00", "Un panettone con all'interno gocce di cioccolato, e ricoperto da cioccolato"));
    listaPanettoni.push(new Prodotto("Panettone alla crema","32.00", "80.00", "Un panettone con all'interno crema"));
    listaPanettoni.push(new Prodotto("Panettone al pistacchio","5.00", "25.00", "Un panettone con all'interno gocce di pistacchio, e ricoperto di pistacchio"));listaPanettoni.push(new Prodotto("Panettone al cioccolato","12.50", "32.00", "Un panettone con all'interno gocce di cioccolato, e ricoperto da cioccolato"));
    listaPanettoni.push(new Prodotto("Panettone alla crema","32.00", "80.00", "Un panettone con all'interno crema"));
    listaPanettoni.push(new Prodotto("Panettone al pistacchio","5.00", "25.00", "Un panettone con all'interno gocce di pistacchio, e ricoperto di pistacchio"));


    listaColombe.push(new Prodotto("Colomba al cioccolato","12.50", "32.00", "Una Colomba con all'interno gocce di cioccolato, e ricoperta da cioccolato"));
    listaColombe.push(new Prodotto("Colomba alla crema","32.00", "80.00", "Una Colomba con all'interno crema"));
    listaColombe.push(new Prodotto("Colomba al pistacchio","5.00", "25.00", "Una Colomba con all'interno gocce di pistacchio, e ricoperta di pistacchio"));
}

function loadData(type) {
    if(type === "P") {
        document.getElementById("productContainer").innerHTML = `<div class="header"><p>PANETTONI</p></div>`;

        for(let i = 0; i < listaPanettoni.length; ++i){
            document.getElementById("productContainer").innerHTML += `<div class="productContainer__card">
            <div class="productContainer__card__imgContainer"></div>
            <div class="productContainer__card__headerContainer">${listaPanettoni[i].name}</div>
            <div class="productContainer__card__descriptionContainer">
                <p>${listaPanettoni[i].descr}</p>
            </div>
            <hr class="productContainer__card__myHr">
            <div class="productContainer__card__price_weight">
                <p>$ ${listaPanettoni[i].price}</p>
                <p>${listaPanettoni[i].weight} KG</p>
            </div>
            <button class="productContainer__card__myBtn">Buy!</button>
        </div>`;
        }
    } else if(type === "C"){
        document.getElementById("productContainer").innerHTML = `<div class="header"><p>COLOMBE</p></div>`;

        for(let i = 0; i < listaColombe.length; ++i){
            document.getElementById("productContainer").innerHTML += `<div class="productContainer__card">
            <div class="productContainer__card__imgContainer"></div>
            <div class="productContainer__card__headerContainer">${listaColombe[i].name}</div>
            <div class="productContainer__card__descriptionContainer">
                <p>${listaColombe[i].descr}</p>
            </div>
            <hr class="productContainer__card__myHr">
            <div class="productContainer__card__price_weight">
                <p>$ ${listaColombe[i].price}</p>
                <p>${listaColombe[i].weight} KG</p>
            </div>
            <button class="productContainer__card__myBtn">Buy!</button>
        </div>`;
        }
    } else if(type === "T"){
            document.getElementById("productContainer").innerHTML = `<div class="header"><p>TORTE</p></div>`;
    }
}