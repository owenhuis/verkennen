texts = ['button','start','knop','press','go','...'];

for (i =0; i <10; i++){

    let button = document.createElement('button');
    button.textIndex = 0
    button.textContent = texts[button.textIndex];
    button.addEventListener('click', evenementen);
    console.log(button)
    let container = document.getElementById('container');
    container.appendChild(button);
}

function evenementen(event){
    this.textIndex += 1
    if (this.textIndex >= texts.length){
        this.textIndex = 0
    }
    this.textContent = texts[this.textIndex]
    console.log(this)
}