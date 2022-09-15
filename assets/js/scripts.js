let x 
x = "Hello, world"
x = 7
x = 3.14
x = new Date()
x = [1,2,10,'twenty']

var v = 10
let n, m
const c = 100
n = 1
m = 'one'
m = n * c
// c = 200

let num = 4
let txt = 'Once upon a time'
let a_different_number = 5
let anotherNumber = 6
let firstName = 'Joe'
let firstname = 'Shay'
console.log(firstName)
console.log(firstname)
firstName = 'Luna'
console.log(firstname)

let ten, notQuiteTen
ten = 30
console.log(ten)
ten = 7 + 3
ten = 12 - 2
ten = 20 / 2
ten = 5 * 2
ten = 30 % 20
notQuiteTen = 9 ** 2

let string, number, boolean, huh, nada, unknown
string = 'I am text'
number = 2
boolean = true
huh = 2 + 10 + 'twelve'
nada = null

if(boolean) {
    console.log('As long as boolean is true, this will print')
}

let unknownNumber = 42

if(ten == 10) {
    console.log('number')
} else if(ten == 'ten') {
    console.log('string')
} else {
    console.log('unknown')
}

if(ten > unknownNumber) {
    console.log('Unknown number is less than 10')
} else if(ten < unknownNumber) {
    console.log('Unknown number is greater than 10')
} else {
    console.log('Unknown number is 10')
}