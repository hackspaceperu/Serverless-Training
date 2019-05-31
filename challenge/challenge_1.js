const reduce = ([a,...b],fn,initValue)=>a?reduce(b,fn,fn(initValue,a)):initValue
const map = (arr,fn)=>reduce(arr,(acc,curr)=>acc.concat(fn(curr,arr)),[])
const filter = (arr,fn)=>reduce(arr,(acc,curr)=>fn(curr)? acc.concat(curr) :acc,[])
const print = console.log
/**
 * @author Thom Maurick Roman Aguilar - thomtwd@gmail.com
 * @param {arr} es el array para buscar
 * @param {value} es el element que será el que comprueba
 * @return La función retornará un array de array
 * @example ([2,6,8,0,9,-10,-1]) and 8 => [[2,6] ,[8,0],[9,-1]]
 */

const filtered = (arr,value)=>{
    let acc = []
    const recursive = arr=>{
        let flag = false
        const [a,...b]=arr
        let result = filter(b,item=>item+arr[0]===value)[0]
        if(result===arr[0]) flag = true
        if(result!==undefined ) {
            acc.push([arr[0],result])
            if(flag) arr.shift()
            arr.splice(arr.indexOf(result),1)
        }
        if(!flag)arr.shift()
        if(arr.length>0) recursive(arr)
        return acc
    }
    return recursive(arr)
}
print(filtered([2,8,6,0,9,-10,-1,6],8))
print(filtered([2,5,1,7,8,-8,1],3))
print(filtered([1,2,3,2,7,8,-3],4))
print(filtered([1,2,4,2,7,8,-3],4))
print(filtered([1,2,4,2,7,8,-3],8))
print(filtered( [4, 6, 2, -6, 10],8))