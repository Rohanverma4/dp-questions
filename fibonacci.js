
const fibonacci = (position) => {
    let fibonacci_table = [0,1];
    for (let i = 2; i < position; i++){
        fibonacci_table[i] = fibonacci_table[i-1] + fibonacci_table[i-2]
    }
    console.log(fibonacci_table[position-1])
}

fibonacci(5)