const rodCutting = (priceArray,lengthArray,rodLength) => {
    let max = priceArray[rodLength - 1];
    let dp = [];
    let first_row = [];
    for (let j = 0; j <= rodLength; j++){
        first_row.push(Math.floor(j/lengthArray[0]))       
    }
    dp.push(first_row);
    for (let i = 2; i < rodLength; i++){
        let dp_row = [];
        let curr_price = priceArray[i-1];
        let curr_length = lengthArray[i-1];
        for (let j = 0; j <= rodLength; j++){
            if (j < curr_length){
                dp_row.push(dp[dp.length-1][j]);
            } else {
                dp_row.push(Math.max(dp[dp.length-1][j],curr_price + dp_row[j-curr_length]))
            }
        }
        dp.push(dp_row)
    }
    console.log(Math.max(dp[dp.length-1][rodLength],max))
}

const priceArray = [1,5,8,9,11,17,17]
const lengthArray = [1,2,3,4,5,6,7]
rodCutting(priceArray,lengthArray,4)