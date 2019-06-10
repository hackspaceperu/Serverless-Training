// doA(()=>{
//     doB()
//     doC(()=>{
//         doD()
//     })
//     doE()
// })
// doF()
const A = (callback = () => {}) => {
    console.log('A')
    callback()
   }
   
   const B = (callback = () => {}) => {
    console.log('B')
    callback()
   }
   
   const C = (callback = () => {}) => {
    console.log('C')
    callback()
   }
   
   const D = (callback = () => {}) => {
    console.log('D')
    callback()
   }
   
   const E = (callback = () => {}) => {
    console.log('E')
    callback()
   }
   
   const F = (callback = () => {}) => {
    console.log('F')
    callback()
   }
   
   A(()=> {
    B()
    C(()=>{
      D()
    })
    E()
   })
   F()