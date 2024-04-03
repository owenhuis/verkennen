products = [
    {
        title: 'eieren',
        weight: 100,
    },
    {
        title: 'melk',
        weight: 200,
    }
];

console.log(products[0].title);
console.log(products[0]['title']);

function calcTotal (){
    let lineTotals = document.querySelectorAll('.line-total');
    console.dir(lineTotal);
    let total = 0;
    for (let lineTotal of lineTotals){
        total += Number(lineTotal.textContent || '0');
    }
    let TotalElement = getElementById("total");
    TotalElement.textContent = totaltoString();
}

function calculator (event){
    alert('changed')
    let amount = Number(this.value);
    let total = this.palletWeight * amount;
    this.lineTotalElement
}


for (let index in products){ // loop door indexen van array products
    var checker_Container = document.getElementById("checker");
    var palletLine = document.createElement('p');
    checker_Container.appendChild(palletLine);
    
    var palletTitle = document.createElement('label');
    palletLine.textContent = products[index].title
    palletLine.appendChild(palletTitle)
    
    var palletInput = document.createElement('input');
    palletInput.type= "number";
    palletInput.id="innput-0"
    palletInput.min = "0";
    palletInput.max = "10";
    palletLine.appendChild(palletInput);


    var een_product = document.createElement('span');
    een_product.textContent = products[index].weight;
    palletLine.appendChild(een_product);

    var gewicht_product = document.createElement('span');
    gewicht_product.textContent = een_product * palletInput
    palletLine.appendChild(gewicht_product);
    
    // var gewicht_product_Berekenen = document.getElementById("gewicht_product");
    // var product_input = document.getElementById("product_Input");
    // product_input.addEventListener('change', calculator)
    // ei_Container.appendChild(product_input)
    // checker_Container.appendChild(ei_Container)


    // een_product.textContent = products[index].weight;
    // pallet_Container.appendChild(een_product);

    // gewicht_product_Berekenen.textContent = een_product * product_input;
    // pallet_Container.appendChild(gewicht_product_Berekenen);

    // product_input.lineTotal = gewicht_product_Berekenen;

    // console.log(products[index].weight);
    // console.log(gewicht_Ei_Berekenen)
}