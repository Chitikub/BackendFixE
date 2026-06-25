// import { add, minus, multiply, divide, modulus } from "./math.js";
// import * as Math from "./math.js";
import "dotenv/config";

// const a = 5;
// const b = 3;
// const c = 20;
// const d = 5;

// // // console.log(`${a} + ${b} = `+ add(a, b));
// // // console.log(`${a} - ${b} =  ` + minus(a, b));
// // // console.log(`${a} * ${b} = ` + multiply(a, b));
// // // console.log(`${c} ÷ ${d} = ` + divide(c, d));
// // // console.log(`${a} % ${b} = ` + modulus(a, b));

// console.log(`${a} + ${b} = ${Math.add(a, b)} บวก`);
// console.log(`${a} - ${b} = ${Math.minus(a, b)} ลบ`);
// console.log(`${a} * ${b} = ${Math.multiply(a, b)} คูณ`);
// console.log(`${c} ÷ ${d} = ${Math.divide(c, d)} หาร`);
// console.log(`${a} % ${b} = ${Math.modulus(a, b)} โมดูลัส`);

const port = process.env.PORT;
const name = process.env.NAME;
const db_host = process.env.DB_HOST;
const db_name = process.env.DB_NAME;

console.log(db_host);
console.log(db_name);
console.log(name);
console.log(port);
