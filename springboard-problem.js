// The floor of 91 springboard is covered by h × w square tiles, where there are h rows of tiles from front (first row) to back (last row) and w columns of tiles from left to right. Each tile has value of 1 to 100 written on it.
// You have to walk on tiles such that sum of numbers is as high as possible, subject to the following restrictions:
// You start by choosing any tile in the first row, and collects the value on that tile. Then, you move to a tile in the next row, collects the value on the tile, and so on until you reach the last row.
// When you move from one tile to a tile in the next row, you can only move to the tile just below it or diagonally to the left or right.
// Given the values of h and w, and the value on each tile, write a program to compute the maximum possible sum you can grab in one single trip from the first row to the last row.

const matrix = [
    [ 3, 1, 7, 4, 2 ],
    [ 2, 1, 3, 1, 1 ],
    [ 1, 2, 2, 1, 8 ],
    [ 2, 2, 1, 5, 3 ],
    [ 2, 1, 4, 4, 4 ],
    [ 5, 2, 7, 5, 1 ]
  ];

const springboard = (matrix) => {
    const n = matrix.length;
    const m = matrix[0].length;

    let dp = [matrix[0]];
    for (let i = 1; i < n; i++){
        let dp_row = []
        for (let j = 0; j < m; j++){
            if (j == 0){
                dp_row.push(Math.max(dp[i-1][j+1],dp[i-1][j]) + matrix[i][j])
            } else if (j == m -1){
                dp_row.push(Math.max(dp[i-1][j-1],dp[i-1][j]) + matrix[i][j])
            } else {
                dp_row.push(Math.max(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]) + matrix[i][j])
            }
        }
        dp.push(dp_row)
    }
    return Math.max(...dp[n-1])
}

console.log(springboard(matrix));