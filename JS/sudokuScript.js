let selectorNumberSelected = null;
let fieldBoxSelected = null;
let sudokuField = document.getElementById('sudokuField');
let totalBlankSpaces = 0;
let controlArray = [];
let newArray = [];
let timeField = document.getElementById('timeFieldMin');
let scoreField = document.getElementById('scoreField');
let scoreBox = document.getElementById('endScore');
let timeBox = document.getElementById('totalTime');
let errorCounter = document.getElementById('lifeField');
let totalScore = 0;
let streakScore = 0;
let totalSeconds = 0;
let differenceTotal = 9;
let total1Filled = 0;
let total2Filled = 0;
let total3Filled = 0;
let total4Filled = 0;
let total5Filled = 0;
let total6Filled = 0;
let total7Filled = 0;
let total8Filled = 0;
let total9Filled = 0;



const playForm = document.getElementById('playForm');

// wat moeten we doen, EERST een functie die correcte sudoku's laadt en opslaat in een multidimensionale array, dan of tegelijk een functie die tegels genereert voor op het veld, en dan een functie die tegels genereert voor in de kiesbalk
let errors = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

const solution =  [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
const solutions = [
    // Sudoku puzzle 1
    [
      "483921657","967345821","251876493","548132976","729564138","136798245","372689514","814253769","695417382"
    ],
    // Sudoku puzzle 2
  
    // Sudoku puzzle 4
    [
        "486795321","521683947","937124658","142968735","698537412","753412896","375841269", "219376584","864259173"
    ],
    // Sudoku puzzle 5
    [
        "827641539","136795824","459238716","375186492","698427351","241359678","712564983","963872145","584913267"
    ],
    // Sudoku puzzle 6
    [
        "486531927","759624183","132987654","523498761","914756832","867213495","678342519","245169378","391875246"
    ],
    // Sudoku puzzle 7
    [
        "387491625","241568379","569327418","758619234","123784596","496253187","934176852","675832941","812945763"
    ]

    // Sudoku puzzle 8
    
    // Sudoku puzzle 9

    // Sudoku puzzle 10


  ];
 

  // ----------------------------------------------------------------
  // FUNCTIE VOOR WAARDES EN CONTROLE TE GENEREREN. PRIO-1: deze hebben we altijd eerst nodig wanneer de speler een game start.
  //-----------------------------------------------------------------
  function newSudokuPuzzle(difficulty) {
    // Een random sudoku selecteren uit onze array
    controlArray = solutions[Math.floor(Math.random() * solutions.length)];

    // er een kopietje van maken om te verwerken SLICE gebruiken
    newArray = controlArray.slice();

    // Dan starten we de functie op voor randomly lege plekjes te voorzien.
    newArray = newArray.map(line => {
       const blankPositions = [];
       let numOfBlanks = 0;
        if (difficulty === 1) {
            numOfBlanks = Math.floor(Math.random() * (6 - 1 + 1)) + 1; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
            totalBlankSpaces += numOfBlanks; // de totalspaces verhoge
        }
        else if (difficulty === 2) {
            numOfBlanks = Math.floor(Math.random() * (7 - 2 + 1)) + 3; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
            totalBlankSpaces += numOfBlanks; // de totalspaces verhoge

        }
        else if (difficulty === 3) {
            numOfBlanks = Math.floor(Math.random() * (8 - 3 + 1)) + 3; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
            totalBlankSpaces += numOfBlanks; // de totalspaces verhoge

        }
        else if (difficulty === 4) {
            numOfBlanks = Math.floor(Math.random() * (8 - 4 + 1)) + 4; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
            totalBlankSpaces += numOfBlanks; // de totalspaces verhoge

        }
        else {
            numOfBlanks = Math.floor(Math.random() * (9 - 5 + 1)) + 5; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
            totalBlankSpaces += numOfBlanks; // de totalspaces verhoge


        }
        
        // random plaatsen voorzien voor deze lege vakken.
        while (blankPositions.length < numOfBlanks) {
            const pos = Math.floor(Math.random() * line.length);
            if (!blankPositions.includes(pos)) {
                blankPositions.push(pos);
            }
        }
        
        // dan gaan we voor elke positie het nummer veranderen door -
        blankPositions.forEach(pos => {
            line = line.substring(0, pos) + '-' + line.substring(pos + 1);
        });
        //de ingevulde lijn teruggeven.
        return line;
    });

    console.log(newArray); // het aangepaste array, met "-" gerandomized.
    console.log(controlArray); // Het controlearray
    
}

//------------------------------------------------------------------------------
// FUNCTIE VOOR HET GENEREREN VAN HET EFFECTIEVE SUDOKUVELD EN SELECTORBALK pRIO2 deze word als 2de geladen

function generateSudokuField() {
    // eerst de html terug clearen
    sudokuField.innerHTML = '';
    //  geneste for loop om het speelveld te genereren.
    let counter = 1;
    for (let row = 0 ; row < 9 ; row++) {
        for (let col = 0 ; col < 9 ; col++) {
            let fieldBox = document.createElement("p");   
            fieldBox.id = row.toString() + "-" + col.toString();
            fieldBox.addEventListener("click",selectAFieldTile);
            fieldBox.classList.add("fieldTile");
            if (newArray[row][col] != "-") {
                fieldBox.textContent = newArray[row][col];
                fieldBox.classList.add("generatedNumber");
                if (newArray[row][col] === "1") {
                    total1Filled++;
                } 

                else if (newArray[row][col] === "2") {
                    total2Filled++;
                }

                else if (newArray[row][col] === "3") {
                    total3Filled++;
                }

                else if (newArray[row][col] === "4") {
                    total4Filled++;
                } 

                else if (newArray[row][col] === "5") {
                    total5Filled++;
                } 

                else if (newArray[row][col] === "6") {
                    total6Filled++;
                } 

                else if (newArray[row][col] === "7") {
                    total7Filled++;
                }

                else if (newArray[row][col] === "8") {
                    total8Filled++;
                }

                else if (newArray[row][col] === "9") {
                    total9Filled++;
                }
                
            }
            if (col % 3 === 2 && col !== 8) {
                fieldBox.style.marginRight = "4px";
            }
            if (row % 3 === 2 && row !== 8) {
                fieldBox.style.marginBottom = "4px";
            }
            if (row == 0 || row == 3|| row == 6) {
                fieldBox.classList.add("BTL");
                fieldBox.classList.add("BTR");
            }
            if (row == 2 || row == 5|| row == 8) {
                fieldBox.classList.add("BBL");
                fieldBox.classList.add("BBR");
            }

            sudokuField.appendChild(fieldBox);
            counter++; 
        }
        console.log(counter);
        console.log(total9Filled);
    }
    updateRemainingCountDisplay();
}

function selectorGenerator(){
// de selectorboxes te genereren.
const field = document.getElementById('choices');
field.innerHTML = '';
// ik start op 1 zo kan ik ineens deze waarde meegeven met de box als textvalue
for (let i = 1; i <= 9; i++){
    let selectorNumber = document.createElement('button');
    //de box een waarde geven
    selectorNumber.id = i;
    selectorNumber.innerHTML = i;
    selectorNumber.addEventListener("click",selectANumber);
    selectorNumber.classList.add('selectorTile');
    // de subboxes genereren
    let remainingCount = document.createElement('span');
    remainingCount.id = i;
    for (let j = 1; j <= 9; j++) {
        if (selectorNumber.id === 1)
        {
            remainingCount.textContent = total1Filled;
            
        }
        else if (selectorNumber.id === 2) {
            remainingCount.textContent = total2Filled;
        }
        else if (selectorNumber.id === 3) {
            remainingCount.textContent = total3Filled;
            
        }
        else if (selectorNumber.id === 4) {
            remainingCount.textContent = total4Filled;

        }
        else if (selectorNumber.id === 5) {
            remainingCount.textContent = total5Filled;

        }
        else if (selectorNumber.id === 6) {
            remainingCount.textContent = total6Filled;
            
        }
        else if (selectorNumber.id === 7) {
            remainingCount.textContent = total7Filled;
            
        }
        else if (selectorNumber.id === 8) {
            remainingCount.textContent = total8Filled;
            
        }
        else if (selectorNumber.id === 9) {
            remainingCount.textContent = total9Filled;
            
        }
    }
    remainingCount.classList.add('lockedTiny');
    selectorNumber.appendChild(remainingCount);

    field.appendChild(selectorNumber);        




}
};



//----------------------------------------------------------------
// SUBFUNCTIES, DEZE WORDEN GEBRUIKT IN DE HOOFDFUNCTIES
//----------------------------------------------------------------

// een functie omde selectorsactief te maken :)
function selectANumber() {
    if (selectorNumberSelected != null) {
        selectorNumberSelected.classList.remove('selectorActive');
    }
    selectorNumberSelected = this;
    selectorNumberSelected.classList.add('selectorActive');
}

// belangerijke functie: we moeten als er een selector actief is deze waarde kunnen overzetten op de velden
function selectAFieldTile() {
    if (selectorNumberSelected) {
        //als er al een waarde in het vak zit breken we de functie af
        if (this.textContent != "") {
            return;
        }
        //id ziet eruit als 0-0 dus slitten we o -
        let coordinates = this.id.split('-'); // geeft bv ["0","0"]
        let row = parseInt(coordinates[0]);
        let column = parseInt(coordinates[1]);
        
        if (controlArray[row][column] == selectorNumberSelected.id) {
            this.textContent = selectorNumberSelected.id;
            this.classList.add("userFilled");
            totalBlankSpaces--;
            console.log(totalBlankSpaces);
            totalScore += 50 + (streakScore * 5);
            scoreField.textContent = totalScore;
            streakScore++;
            switch (selectorNumberSelected.id) {
                case "1":
                    total1Filled++;
                    break;
                case "2":
                    total2Filled++;
                    break;
                case "3":
                    total3Filled++;
                    break;
                case "4":
                    total4Filled++;
                    break;
                case "5":
                    total5Filled++;
                    break;
                case "6":
                    total6Filled++;
                    break;
                case "7":
                    total7Filled++;
                    break;
                case "8":
                    total8Filled++;
                    break;
                case "9":
                    total9Filled++;
                    break;
                default:
                    break;
            }
    
        }
        else {
            errors = errors + 1;
            errorCounter.innerHTML = "";
            errorCounter.textContent = errors;
            this.style.border = "1px solid red";
            streakScore = 0;
        }
        updateRemainingCountDisplay();

    }
}

function updateRemainingCountDisplay() {
    const field = document.getElementById('choices');
    const selectorBoxes = document.getElementsByClassName('selectorTile');
    for (let i = 0; i < selectorBoxes.length; i++) {
        const selectorNumber = selectorBoxes[i];
        const numberId = parseInt(selectorNumber.id);
        let remainingCount = 0;

        // Determine the remaining count based on the respective counter
        switch (numberId) {
            case 1:
                remainingCount = differenceTotal - total1Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 2:
                remainingCount = differenceTotal - total2Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 3:
                remainingCount = differenceTotal - total3Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 4:
                remainingCount = differenceTotal - total4Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 5:
                remainingCount = differenceTotal - total5Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 6:
                remainingCount = differenceTotal - total6Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 7:
                remainingCount = differenceTotal - total7Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 8:
                remainingCount = differenceTotal - total8Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            case 9:
                remainingCount = differenceTotal - total9Filled;
                if (remainingCount === 0) {
                    field.removeChild(selectorNumber);
                }
                break;
            default:
                break;
        }

        // Update the displayed count for each selector tile
        const remainingCountElement = selectorNumber.querySelector('span');
        remainingCountElement.textContent = remainingCount;
    }
}
// een functie om na te zien wanneer het spel voltooid is
function isGridFilled(board) {
    if (totalBlankSpaces === 0) {
        return true; 
    }
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] == "-") {
          return false; // Lege vakken of vak gevonden.
        }
      }
    }
   
    return true; // alle vakken zijn gevuld.
  }

// een timerfunctie
let timer = null;

function startTimer() {
    timer = setInterval(function() {
        // timer incrementeren
        totalSeconds++;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Display the time in the format 00:00
        let displayMinutes = String(minutes).padStart(2, '0');
        let displaySeconds = String(seconds).padStart(2, '0');
        if (totalBlankSpaces === 0) {
            console.log("Timer gestot");
            clearInterval(timer);
        }
        timeField.textContent = displayMinutes + ":" + displaySeconds;
    }, 1000); // 1000 millisecondes = 1 second
   
    
}

// functie voor de score
// elke goed antwoord is 50, en hoelanger je goed antwoord hoe meer je krijgt. ik hou een tracker bij die je streakt telt en adh daarvan extra score geeft
function getScore(){
    totalScore = 0;
    // nevermind ikheb hem aan de selectNumbergenerator gehongen.
}


//------------------------------------------------------------------------------------------------------------------------------
//EVENTLISTENERS VOOR DE WERKING
//------------------------------------------------------------------------------------------------------------------------------

    // de selectors mogen altijd gegenereerd worden.
window.onload = function() {
    selectorGenerator();
    updateRemainingCountDisplay();
}

document.getElementById('sudokuField').addEventListener('click', function() {
    // Elke keer er een update gebeurt kijken we heel het veld na
    let isFilled = isGridFilled(newArray); 

    if (isFilled) {
        console.log("Sudoku grid is completely filled!");
        // Log voor na te kijken en hieronder de logica
        let mainOverLay = document.getElementById('greyScale');
        mainOverLay.classList.toggle("hidden101");
        let victoryMessage = document.getElementById('failedOrFixed');
        victoryMessage.classList.toggle('hidden101');
        console.log(victoryMessage);

        scoreBox.textContent = totalScore;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Display the time in the format 00:00
        let displayMinutes = String(minutes).padStart(2, '0');
        let displaySeconds = String(seconds).padStart(2, '0');
        timeBox.textContent = displayMinutes + ":" + displaySeconds;

    } else {
        console.log("Sudoku grid is not completely filled yet.");
    }
});
// tryagain, we toggelen al de boxes terug initieel, en resetten de score, timer en errors
document.getElementById('reRun').addEventListener("click", function(e) {
    let mainOverLay = document.getElementById('greyScale');
        mainOverLay.classList.toggle("hidden101");
        let victoryMessage = document.getElementById('failedOrFixed');
        victoryMessage.classList.toggle('hidden101');
        let formBox = document.getElementById('playSudoku');
        formBox.classList.toggle('hidden101');
        errors = 0;
        totalScore = 0;
        totalSeconds = 0;    
        scoreField.textContent = '0';
        errorCounter.textContent = "0";
        timeField.textContent = "00:00";
        total1Filled = 0;
        total2Filled = 0;
        total3Filled = 0;
        total4Filled = 0;
        total5Filled = 0;
        total6Filled = 0;
        total7Filled = 0;
        total8Filled = 0;
        total9Filled = 0;
        selectorGenerator();
        updateRemainingCountDisplay();

})
// DE HOOFD LISTENER
playForm.addEventListener('submit', function(e) {  
    e.preventDefault();

    let difficulty = parseInt(document.getElementById('selectDiff').value);
    newSudokuPuzzle(difficulty); // prio 1
    generateSudokuField(); // prio 2
    

    // het menutje verbergen
    let formBox = document.getElementById('playSudoku');
    formBox.classList.toggle('hidden101');

    //timer starten
    startTimer();

});







// dit is hoe anderen het doen, ik ga gewoon refreshen met de functies die ik nog schrijven moet 20/12/2023 2:48

  function displayPuzzle(newBoard) {
    const sudokuField = document.getElementById('sudokuField'); // Get the container element where the Sudoku grid will be displayed
    sudokuField.innerHTML = ''; // Clear previous puzzle before displaying new one
  
    // Loop through the Sudoku board (2D array) to create and display the grid on the UI
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        let fieldBox = document.createElement("p");
        fieldBox.id = row.toString() + "-" + col.toString();
        fieldBox.addEventListener("click", selectAFieldTile);
        fieldBox.classList.add("fieldTile");
        // Check if the cell in the Sudoku board has a number
        if (newBoard[row][col] !== "-") {
          fieldBox.textContent = newBoard[row][col]; // Fill in the number
          fieldBox.classList.add("generatedNumber");
        }
        // Add additional styling based on grid layout, borders, etc. (as needed)
        // Append the created box to the container
        sudokuField.appendChild(fieldBox);
      }
    }
}
