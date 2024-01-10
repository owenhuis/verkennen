inputTeams = document.getElementById('input-teams');

inputTeam1.value = 'naam team 1'; // testdata
inputTeam2.value = 'naam team 2 '; // testdata

function start(event){
    if (inputTeam1.value.trim() == '') return
    alert('gestart')
}
startButton.addEventListener('click',start);

function count(event){
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.textContent = inputTeam1.value || '....';
    nameTeam2.textContent = inputTeam2.value || '....';
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);