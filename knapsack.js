const mat = [[1,8],[2,4],[3,0],[2,5],[2,3]];
const capacity = 4;
const n = mat.length;

const knapsack = (capacity,n,mat) => {
    let dp_table = []
    let first_row = []
    for (let i = 0; i <= capacity; i++){
        first_row.push(0);
    }
    dp_table.push(first_row);
    for (let i = 1; i <= n; i++){
        const current_weight = mat[i-1][0];
        const current_value = mat[i-1][1];
        const curr_row = [0];
        for (let j = 1; j <= capacity; j++){
            if (j < current_weight){
                curr_row.push(dp_table[i-1][j]);
            } else {
                curr_row.push(Math.max(dp_table[i-1][j],current_value + dp_table[i-1][j-current_weight]))
            }
        }
        dp_table.push(curr_row)
    }
    return dp_table[n][capacity]
}

console.log(knapsack(capacity,n,mat))