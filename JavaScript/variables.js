// variables

// variable global se usa el var
var myString = 'Esto es una cadena de texto'

console.log(myString)

let myString2 = 'Esto es otra cadena de texto'
console.log(myString2)

let myNumber2= 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool= false
console.log(myBool)
console.log(typeof myBool)

let myBool1= null
console.log(myBool1 + myNumber2)

let myUndefined
console.log(myUndefined)

// constantes

const myConst = 'Esto es una constante'
console.log(myConst)

// control de flujo
// myNumber2 = 11   esto es para probar
// operadores && son para "y", || son para "o"
if (myNumber2 === 6.5 && myBool === false) {
  console.log('El valor es 6.5')
} else if (myNumber2 === 11) {
  console.log('El valor es 11')
} else {
  console.log('El valor no es 6.5')
}

// funciones

function myfunction () {
  console.log('Mi funcion')
}

myfunction()

// Listas

let mylist = ['Bazzel', 'Tomás', 'Olivares']
console.log(mylist)
console.log(mylist[0])

// Set (NO ADMITE REPETIDOS, LOS IGNORA)

let mySet = new Set(['Bazzel', 'Tomás', 'Olivares', 'Bazzel'])
console.log(mySet)

// Mapas o Diccionarios (USA UN STRING Y UN VALOR)

let myMapa = new Map([['Bazzel', 29], ['Tomás', 30]])
myMapa.set('Valle', 31)
console.log(myMapa)
console.log(myMapa.get('Bazzel'))

// Bucles
// Sirve con la lista, mapa y set
for (const value of mylist) {
  console.log(value)
}

let mycounter = 0

while (mycounter < mylist.length) {
  console.log(mylist[mycounter])
  mycounter++
}

// clases

class MyClass {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

let myClass = new MyClass('Bazzel', 29)
console.log(myClass)
console.log(myClass.name)

// enum
// solo toma los valores que ya le diste, nada más
const myEnum = {
  DART: 'dart', 
  PYTHON: 'python', 
  SWIFT: 'swift', 
  JAVA: 'java'
}

const myenum = myEnum.DART
console.log(myenum)
