let rankings = JSON.parse(localStorage.getItem('highScores') || [] );

window.onclick = console.log(rankings);

const rankingList = document.getElementById('rankingList');

function getHighScores() {
    for (let i = 0; i < rankings.length; i++) {
        let newRanking = document.createElement('tr');

        

        // de cellen maken voor de data
        let nameCell = document.createElement('td');
            nameCell.textContent = rankings[i].name;
            nameCell.colSpan = 2;
            nameCell.style.letterSpacing = '0.1rem';

        let scoreCell = document.createElement('td');
            scoreCell.textContent = rankings[i].score;
            scoreCell.colSpan = 2;
            scoreCell.style.fontSize = '1.4rem';
            scoreCell.style.textDecoration = 'underline red dashed  ';
            scoreCell.style.textAlign = 'center';
            scoreCell.style.padding = '2px 0';

        let timeCell = document.createElement('td');
            timeCell.textContent = rankings[i].totalTime;
            timeCell.colSpan = 1;
            timeCell.style.textAlign = 'center';
            timeCell.style.padding = '2px 0';
            timeCell.style.letterSpacing = '0.2rem';

        let orderCell = document.createElement('td');
            orderCell.textContent = i + 1 + '.';
            orderCell.colSpan = 1;
            orderCell.style.textDecoration = 'underline red';
            

        let errorCell = document.createElement('td');
            errorCell.textContent = rankings[i].totalMistakes;
            errorCell.style.color = 'red';
            errorCell.style.textAlign ="center";
            errorCell.style.textDecoration = "underline grey";
            errorCell.style.padding = "2px 0";
            errorCell.colSpan = 1;

        
        let diffCell = document.createElement('td');
        if (rankings[i].Difficulty === '1') {
            let diffVal = "Easy";
            diffCell.textContent = diffVal;

        }
        else if (rankings[i].Difficulty === '2') {
            let diffVal = "Medium";
            diffCell.textContent = diffVal;

        }
        else if (rankings[i].Difficulty === '3') {
            let diffVal = "Hard";
            diffCell.textContent = diffVal;

        }
        else if (rankings[i].Difficulty === '4') {
            let diffVal = "Master";
            diffCell.textContent = diffVal;

        }
            diffCell.style.textDecoration = "underline red";
            diffCell.style.fontWeight = "500";
            diffCell.style.padding = "0";
            diffCell.style.textAlign = "center";    
            diffCell.colSpan = 1;


        // dan in de juiste volgorde alles in de rij zetten 
        newRanking.appendChild(orderCell);
        newRanking.appendChild(nameCell);
        newRanking.appendChild(scoreCell);
        newRanking.appendChild(timeCell);
        newRanking.appendChild(errorCell);
        newRanking.appendChild(diffCell);

        // en dan de rij in de table op html zetten
        rankingList.appendChild(newRanking);
    }

};
// functie aanroeen als de agina geladen is
window.onload = getHighScores();