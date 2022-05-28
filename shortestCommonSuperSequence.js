
const shortestCommonSuperSequence = (str1,str2,m,n) => {
    let dp = [];

    for(let i = 0; i <= n; i++){
        let dp_row = []
        for(let j = 0; j <= m; j++){
            if(i === 0){
                dp_row.push(j);
            } else if (j === 0){
                dp_row.push(i)
            } else if (str1[i-1] == str2[j-1]){
                dp_row.push(1 + dp[i-1][j-1])
            } else {
                dp_row.push(Math.min(dp_row[dp_row.length - 1],dp[i-1][j]) + 1)
            }
        }
        dp.push(dp_row)
    }
    console.log(dp)
}
const str1 = 'abac';
const str2 = 'cab';
shortestCommonSuperSequence(str1,str2,str1.length,str2.length)