var knop = document.getElementById('knoppie');
var buttonText = knop.textContent || knop.innerText;
var H1 = document.getElementById('h1')


knop.addEventListener('click', function(){
    for (var i = 0; i < 5; i++)
        button()
})

function button(){
    H1.innerText += buttonText
}