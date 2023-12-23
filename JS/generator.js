function generateSudoku() {
    // Helper function to shuffle an array
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    // Helper function to generate a valid row
    function generateRow(n) {
      const base = Array.from({ length: 9 }, (_, index) => (index + n) % 9 + 1);
      return shuffle(base);
    }
  
    // Generate the Sudoku grid
    const grid = Array.from({ length: 9 }, (_, index) => generateRow(index));
  
    // Transpose the grid to create columns
    const transposedGrid = Array.from({ length: 9 }, (_, i) =>
      Array.from({ length: 9 }, (_, j) => grid[j][i])
    );
  
    // Swap rows within a region
    function swapRows(grid) {
      const region = Math.floor(Math.random() * 3) * 3;
      const row1 = region + Math.floor(Math.random() * 3);
      let row2 = region + Math.floor(Math.random() * 3);
      while (row1 === row2) {
        row2 = region + Math.floor(Math.random() * 3);
      }
      [grid[row1], grid[row2]] = [grid[row2], grid[row1]];
      return grid;
    }
  
    // Swap columns within a region
    function swapColumns(grid) {
      const region = Math.floor(Math.random() * 3) * 3;
      const col1 = region + Math.floor(Math.random() * 3);
      let col2 = region + Math.floor(Math.random() * 3);
      while (col1 === col2) {
        col2 = region + Math.floor(Math.random() * 3);
      }
      for (let i = 0; i < 9; i++) {
        [grid[i][col1], grid[i][col2]] = [grid[i][col2], grid[i][col1]];
      }
      return grid;
    }
  
    // Shuffle rows and columns
    for (let i = 0; i < 15; i++) {
      grid.forEach(swapRows);
      transposedGrid.forEach(swapColumns);
    }
  
    // Convert the grid to the required format
    const solution = grid.map(row => row.join(''));
    return solution;
  }
  
  // Generate a Sudoku solution
  const solution = generateSudoku();
  console.log(solution);
  