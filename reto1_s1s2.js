const numeros = [4, 6, 2, -6, 10]
// Las parejas de numeros que sumen 8; sin usar un loop.

// [6,2]

function parejassuma(numerosArray, suma, arrparejas = []) {
  if (numerosArray.length > 1) {
    let lastnumber = numerosArray[numerosArray.length - 1]
    let i = numerosArray.indexOf(suma - lastnumber)
    if (i == -1) {
      numerosArray.pop()
      parejassuma(numerosArray, suma, arrparejas)
    } else if (i >= 0) {
      arrparejas.push([suma - lastnumber, lastnumber])
      numerosArray.splice(i, 1)
      numerosArray.pop()
      parejassuma(numerosArray, suma, arrparejas)
    }
  }
  return arrparejas
}

// const arr1 = [1, 4, 3, 7, 15, 6, 20, -5, 8, -7]
// const arr2 = [1, 4, 3, 7, -5, 8]
// const arr3 = [15, 6, 20, -5, 8, 18]

// console.log(parejassuma(arr1, 22))
// console.log(parejassuma(arr2, 15))
// console.log(parejassuma(arr3, 26))

console.log(parejassuma(numeros, 8))
