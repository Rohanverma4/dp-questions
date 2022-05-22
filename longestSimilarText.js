
const similarText = (str1,str2) => {
    let dp = [];
    let first_row = []
    for (let i = 0; i <= str1.length; i++){
        first_row.push(0);
    }
    dp.push(first_row);

    for(let i = 1; i <= str2.length; i++){
        const text1 = str2[i-1];
        let curr_row = [0]
        for(let j = 1; j <= str1.length; j++){
            let text2 = str1[j-1];
            if (text1 == text2){
                curr_row.push(dp[i-1][j-1]+1)
            } else{
                curr_row.push(Math.max(dp[i-1][j],curr_row[curr_row.length-1]))
             }
        }
        dp.push(curr_row)
    }
    return dp[dp.length-1][dp[0].length-1]
    
}

console.log(similarText("AEDFHR","ABCDGH"))