
const numberOfWays = (way1,way2,way3,target) => {
    let dp = [1];
    for (let i = 1; i <= target; i++){
        const way1Value = i - way1 >= 0 ? dp[i-way1] : 0;
        const way2Value = i - way2 >= 0 ? dp[i-way2] : 0;
        const way3Value = i - way3 >= 0 ? dp[i-way3] : 0;
        dp[i] = way1Value + way2Value + way3Value;
    }
    console.log(dp)
}

numberOfWays(1,2,3,4)