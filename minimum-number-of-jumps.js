
const numberOfJumps = (n,arr) => {
    let jumps = [0];
    for (let i = 1; i < n; i++){
        jumps[i] = Number.MAX_VALUE;
        for (let j = 0; j < i; j++){
            if (i <= (j + arr[j])){
                jumps[i] = Math.min(jumps[i],jumps[j]+1)
            }
        }
    }
    console.log(jumps[n-1])
}

numberOfJumps(5,[2,3,1,1,4])
numberOfJumps(6,[ 1, 3, 6, 1, 0, 9 ])
numberOfJumps(6,[ 1, 3, 6, 1, 0, 9 ])