inputTeams = document.getElementById('input-teams');

inputTeam1.value = 'Deetos'; // testdata
inputTeam2.value = 'PKC'; // testdata

function start(event){
}
startButton.addEventListener('click',start);

function count(event){
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    alert('input changed!!!')
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);