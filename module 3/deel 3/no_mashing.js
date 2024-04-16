var blub = true
let buttonContainer = document.getElementById('buttonContainer');

function counter(event){
    if (blub == true){
    result.counter += 1
    blub = false
    }
    timeOut = setInterval(count,1500)
    blub = true
    clearInterval(timeOut)
}

function count(event){
    blub = true
}

var button = document.createElement('button');
button.textContent = 'klik hier'
button.addEventListener('click',counter)
var result = document.createElement('p');
result.counter = 0;
result.textContent = result.counter;
console.log(result)
buttonContainer.appendChild(button);
buttonContainer.appendChild(result);