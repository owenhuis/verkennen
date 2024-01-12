var inputTeams = document.getElementById('input-teams');
var lastScoringTeam = null;
var lastServingTeamNow = null;
var lastServingTeamPrevious = null;

inputTeam1.value = 'naam team 1'; // testdata
inputTeam2.value = 'naam team 2 '; // testdata

function start(event){
    if (inputTeam1.value.trim() == '') return
    inputTeams.style.display = 'None';
    counterTeam1.counter = 0;
    counterTeam2.counter = 0;
    displayNames();
    displayCounters();
    startServing();
    counterTeam1.addEventListener('click',count);
    counterTeam2.addEventListener('click',count);
    undoButton.addEventListener('click', terugdoen);   
}

function terugdoen(){
    alert('undo');
    if (lastScoringTeam === null) return;
    lastScoringTeam.counter--;
    displayCounters();
    lastScoringTeam = null;
    lastServingTeamNow = lastServingTeamPrevious
    lastServingTeamPrevious = null;
    displayServing(lastServingTeamNow);
}

function displayCounters(){
    counterTeam1.textContent = counterTeam1.counter;
    counterTeam2.textContent = counterTeam2.counter;
};

function startServing(){
    if (!servingTeam2.checked){
        displayServing(counterTeam1);
    }else if (servingTeam2.checked) {
        displayServing(counterTeam2);
    }
    
}

function displayServing(teamCounter){
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
    teamCounter.classList.add('serving');
}

startButton.addEventListener('click',start);

function count(event){
    this.counter += 1;
    displayCounters();
    displayServing(this);
    lastScoringTeam = this;
    lastServingTeamPrevious = lastServingTeamNow;
    lastServingTeamNow = this;
}


function displayNames(event){
    nameTeam1.textContent = inputTeam1.value || '....';
    nameTeam2.textContent = inputTeam2.value || '....';
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);