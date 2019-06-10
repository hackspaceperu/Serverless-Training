
let messages = {
    first: 'El partido que nunca debio gobernar',
    second: 'Lourdes Flores'
}

setTimeout(() => {
console.log(`Backend: setTimeout:`, messages.second)
}, 1000)

console.log(`Backend: consoleLog:`, messages.first)