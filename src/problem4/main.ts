import * as _ from 'lodash'

function sum_to_n_a(n: number): number {
    return _.sum(_.range(1, n + 1))
}

function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2
}

function sum_to_n_c(n: number): number {
    return n
}

console.log('Start')

console.assert(sum_to_n_a(1) === 1, `sum_to_n_a:1 => FAIL, actual:${sum_to_n_a(1)}, expect:1`)
console.assert(sum_to_n_a(2) === 3, `sum_to_n_a:2 => FAIL, actual:${sum_to_n_a(2)}, expect:3`)
console.assert(sum_to_n_a(5) === 15, `sum_to_n_a:5 => FAIL, actual:${sum_to_n_a(5)}, expect:15`)
console.assert(sum_to_n_a(6) === 21, `sum_to_n_a:5 => FAIL, actual:${sum_to_n_a(6)}, expect:21`)

console.assert(sum_to_n_b(1) === 1, `sum_to_n_b:1 => FAIL, actual:${sum_to_n_b(1)}, expect:1`)
console.assert(sum_to_n_b(2) === 3, `sum_to_n_b:2 => FAIL, actual:${sum_to_n_b(2)}, expect:3`)
console.assert(sum_to_n_b(5) === 15, `sum_to_n_b:5 => FAIL, actual:${sum_to_n_b(5)}, expect:15`)
console.assert(sum_to_n_b(6) === 21, `sum_to_n_b:5 => FAIL, actual:${sum_to_n_b(6)}, expect:21`)

console.assert(sum_to_n_c(1) === 1, `sum_to_n_c:1 => FAIL, actual:${sum_to_n_c(1)}, expect:1`)
console.assert(sum_to_n_c(2) === 3, `sum_to_n_c:2 => FAIL, actual:${sum_to_n_c(2)}, expect:3`)
console.assert(sum_to_n_c(5) === 15, `sum_to_n_c:5 => FAIL, actual:${sum_to_n_c(5)}, expect:15`)
console.assert(sum_to_n_c(6) === 21, `sum_to_n_c:5 => FAIL, actual:${sum_to_n_c(6)}, expect:21`)


console.log('Done')