let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// functie maken om de highscore vast te leggen oder een nieuwe score vast te leggen
function addHighScore() {
    // Eerst vragen we een username 
    const username = prompt("Enter your username:");
    // dan gaan we nakijken of deze username al bestaat in ons systeem. en of de user uberhaubt een naam heeft ingevuld
    if (username) {
        const highScore = parseInt(document.getElementById('scoreField').textContent, 10); 
        const time = document.getElementById('timeFieldMin').textContent;  
        const mistakes = parseInt(document.getElementById('lifeField').textContent, 10);  
        const diff = document.getElementById('selectDiff').value;
    
    // Al deze data vastleggen in een object zodat we achteraf kunnen sorteren met .sort
    const scoreData = {
        name: username,
        score: highScore,
        totalTime: time,
        totalMistakes: mistakes,
        Difficulty: diff
    };
        
        //index check voor de username na te kijken op voorkomst 
        const UNameIndex = highScores.findIndex(entry => entry.name === username);
        // als de user bestaat en de nieuwe score hoger is overschrijven we deze.
        if (UNameIndex !== -1) {
            // dus we doen terug een if statement om the checken of de nieuwe score hoger is.
            if (highScore > highScores[UNameIndex].score) {   
                highScores[UNameIndex] = scoreData;}         
        }
        else {
            // dus als de user niet bestaat pushen we een nieuw object in het array 
            highScores.push(scoreData);
        }

        highScores.sort((a,b) => {
            // we sorteren eerst op highscore
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            // als iemand evenveel punten heeft gaan we kijken naar tijd 
            if (a.totalTime !== b.totalTime) {
                return a.totalTime - b.totalTime;
            }
            
            //en tot slot een laatste check op errors voor moest de tijd en score hetzelfde zijn
            return a.totalMistakes - b.totalMistakes
        });

        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
    else {
        alert(' Fill in a valid nam please');
    }

    
}

document.getElementById('saveScore').addEventListener('click', function(e) {
    addHighScore();
});
