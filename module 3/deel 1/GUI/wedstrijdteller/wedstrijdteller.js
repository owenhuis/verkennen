var inputTeams = document.getElementById('input-teams');
var lastScoringTeam = null;
var lastServingTeamNow = null;
var lastServingTeamPrevious = null;

MAXSETSCORE = 25;

inputTeam1.value = 'naam team 1'; // testdata
inputTeam2.value = 'naam team 2 '; // testdata

function startset(){
    counterTeam1.counter = 0;
    counterTeam2.counter = 0; 
}

function start(event){
    if (inputTeam1.value.trim() == '') return;
    inputTeams.style.display = 'None';
    setScoreTeam1 = 0;
    setScoreTeam2 = 0;
    startset();
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

function setEnded(){
    return (counterTeam1.counter == MAXSETSCORE || counterTeam2.counter == MAXSETSCORE)
}
function displaySetScore(){
    setScoreTeam1.textContent = setScoreTeam1.counter;
    setScoreTeam2.textContent = setScoreTeam2.counter;

}

function UpdateSetScore(teamCounter){
    if (teamCounter == counterTeam1){
        return setScoreTeam1 ++;
    } else {
        return setScoreTeam2 ++;
    }
    displaySetScore();
}

function count(event){
    this.counter += 1;
    displayCounters();
    displayServing(this);
    lastScoringTeam = this;

    lastServingTeamPrevious = lastServingTeamNow;
    lastServingTeamNow = this;
    if (setEnded()){
        if (prompt('set beëindigt? j/n') == "j"){
        UpdateSetScore(this);}
     else {
        alert
    }}
}


function displayNames(event){
    nameTeam1.textContent = inputTeam1.value || '....';
    nameTeam2.textContent = inputTeam2.value || '....';
    setTeam1.textContent = inputTeam1.value || '....';
    setTeam2.textContent = inputTeam2.value || '....';
}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);



function toeter(){
    alert('toet toet');
    console.dir(this);
}

nameTeam1.toetermaar = toeter;