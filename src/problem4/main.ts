function sum_to_n_a(n: number): number {
    return n
}

function sum_to_n_b(n: number): number {
    return n
}

function sum_to_n_c(n: number): number {
    return n
}

console.log('Start')

console.assert(sum_to_n_a(1) === 1, 'sum_to_n_a:1 => FAIL')
console.assert(sum_to_n_a(2) === 3, 'sum_to_n_a:2 => FAIL')
console.assert(sum_to_n_a(5) === 15, 'sum_to_n_a:5 => FAIL')
console.assert(sum_to_n_a(6) === 21, 'sum_to_n_a:6 => FAIL')

console.assert(sum_to_n_b(1) === 1, 'sum_to_n_a:1 => FAIL')
console.assert(sum_to_n_b(2) === 3, 'sum_to_n_a:2 => FAIL')
console.assert(sum_to_n_b(5) === 15, 'sum_to_n_a:5 => FAIL')
console.assert(sum_to_n_b(6) === 21, 'sum_to_n_a:6 => FAIL')

console.assert(sum_to_n_c(1) === 1, 'sum_to_n_a:1 => FAIL')
console.assert(sum_to_n_c(2) === 3, 'sum_to_n_a:2 => FAIL')
console.assert(sum_to_n_c(5) === 15, 'sum_to_n_a:5 => FAIL')
console.assert(sum_to_n_c(6) === 21, 'sum_to_n_a:6 => FAIL')


console.log('Done')