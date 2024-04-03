var blub = true
let buttonContainer = document.getElementById('buttonContainer');

function counter(event){
    if (blub == true){
    result.textContent += 1
    blub = false
    }
    setInterval(count,1500)
}

function count(event){
    blub = true
}

var button = document.createElement('button');
button.textContent = 'klik hier'
button.addEventListener('click',count)
var result = document.createElement('p');
result.textContent = 0;


buttonContainer.appendChild(button);
buttonContainer.appendChild(result);