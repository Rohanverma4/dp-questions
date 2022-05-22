// Given a set of non-negative integers, and a value sum, determine
// if there is a subset of the given set with sum equal to given sum. 

const subsetSum = (array,sum) => {
    let dp = [];
    let first_row = [];
    for (let i = 0; i <= sum; i++){
        i == array[0] || i == 0 ?
                   first_row.push(true) : first_row.push(false);
    }
    dp.push(first_row)
    
    for (let i = 1; i < array.length; i++){
        let temp_row = [];
        const current_value = array[i];
        for (let j = 0; j <= sum; j++){
            if (j < current_value){
                temp_row.push(dp[i-1][j])
            } else {
                temp_row.push(dp[i-1][j-current_value] || dp[i-1][j])
                if (temp_row.length - 1 ==sum && temp_row[temp_row.length-1]){
                    return true;
                }
            }
        }
        dp.push(temp_row);
    }
    return dp[dp.length-1][dp[0].length-1]
}

const array = [3,34,4,12,5,2]
console.log(subsetSum(array,9))