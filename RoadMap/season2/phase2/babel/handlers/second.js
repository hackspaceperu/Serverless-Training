if (!global._babelPolyfill) {
   require('babel-polyfill');
}

const p = () => new Promise((resolve, reject)=> resolve({message: 'Segundo mensaje'}))

export const hello = async(event, context, cb) => {
  try{
    return await p()
  }catch(error){
    return error
  }
};
