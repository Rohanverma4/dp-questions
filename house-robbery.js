// Robbery is pretty common in dp nation.

// A robber is planning to rob houses along a street. Each house has a certain amount of gold stashed, the only constraint stopping you from robbing each of them is that adjacent houses have a very smart security system connected andit will automatically alert the police if two adjacent houses were robbed  on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money the roober can rob tonightwithoutgetting caught.

const houseRobbery = (n,arr) => {
    let dp = [arr[0], Math.max(arr[0],arr[1])];
    for (let i = 2; i < n; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+arr[i])
    }
    return dp[n-1];
}

console.log(houseRobbery(2,[1,100]));
console.log(houseRobbery(3,[2,100,99]));
console.log(houseRobbery(4,[100,1,1,100]));
