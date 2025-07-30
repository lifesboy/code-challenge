"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
function sum_to_n_a(n) {
    return _.sum(_.range(1, n + 1));
}
function sum_to_n_b(n) {
    return n * (n + 1) / 2;
}
function sum_to_n_c(n) {
    let s = 0;
    do {
        s += n;
    } while (--n > 0);
    return s;
}
console.log('Start');
console.assert(sum_to_n_a(1) === 1, `sum_to_n_a:1 => FAIL, actual:${sum_to_n_a(1)}, expect:1`);
console.assert(sum_to_n_a(2) === 3, `sum_to_n_a:2 => FAIL, actual:${sum_to_n_a(2)}, expect:3`);
console.assert(sum_to_n_a(5) === 15, `sum_to_n_a:5 => FAIL, actual:${sum_to_n_a(5)}, expect:15`);
console.assert(sum_to_n_a(6) === 21, `sum_to_n_a:5 => FAIL, actual:${sum_to_n_a(6)}, expect:21`);
console.assert(sum_to_n_b(1) === 1, `sum_to_n_b:1 => FAIL, actual:${sum_to_n_b(1)}, expect:1`);
console.assert(sum_to_n_b(2) === 3, `sum_to_n_b:2 => FAIL, actual:${sum_to_n_b(2)}, expect:3`);
console.assert(sum_to_n_b(5) === 15, `sum_to_n_b:5 => FAIL, actual:${sum_to_n_b(5)}, expect:15`);
console.assert(sum_to_n_b(6) === 21, `sum_to_n_b:5 => FAIL, actual:${sum_to_n_b(6)}, expect:21`);
console.assert(sum_to_n_c(1) === 1, `sum_to_n_c:1 => FAIL, actual:${sum_to_n_c(1)}, expect:1`);
console.assert(sum_to_n_c(2) === 3, `sum_to_n_c:2 => FAIL, actual:${sum_to_n_c(2)}, expect:3`);
console.assert(sum_to_n_c(5) === 15, `sum_to_n_c:5 => FAIL, actual:${sum_to_n_c(5)}, expect:15`);
console.assert(sum_to_n_c(6) === 21, `sum_to_n_c:5 => FAIL, actual:${sum_to_n_c(6)}, expect:21`);
console.log('Done');
