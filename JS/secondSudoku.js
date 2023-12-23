// Declare variables outside the functions
const solutions = [
    // Sudoku puzzles...
  ];
  
  let controlArray = [];
  let newArray = [];
  
  function newSudokuPuzzle() {
      // Select a solution randomly
      controlArray = solutions[Math.floor(Math.random() * solutions.length)];
  
      // Create a copy of the controlArray to modify
      newArray = controlArray.slice();
  
      // Rest of your logic here to modify newArray with blank spaces
      // ...
  
      console.log(newArray); // Modified board with blanks
      console.log(controlArray); // Original solution
  }
  
  // Another function that can access controlArray and newArray
  function anotherFunction() {
      // You can access controlArray and newArray here
      console.log(controlArray); // Original solution
      console.log(newArray); // Modified board with blanks
  }

  function newSudokuPuzzle() {
    controlArray = solutions[Math.floor(Math.random(0,solutions.length+1))];
    console.log(controlArray);
    // we maken een kopie van het controle array, deze gaan we dan bewerken.
    newArray = controlArray.slice();



    console.log(newArray);
    
}

function newSudokuPuzzle() {
    // Een random sudoku selecteren uit onze array
    controlArray = solutions[Math.floor(Math.random() * solutions.length)];

    // er een kopietje van maken om te verwerken SLICE gebruiken
    newArray = controlArray.slice();

    // Dan starten we de functie op voor randomly lege plekjes te voorzien.
    newArray = newArray.map(line => {
        const numOfBlanks = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // Random nummer genereren voor elke line, dit bepaald het aantal lege vakken per line
        const blankPositions = [];
        
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