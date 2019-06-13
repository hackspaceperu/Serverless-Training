// inician la app

const app = process.env.APPLICATION

require('@babel/register')({
    'extends': './.babelrc',
    ignore: [/node_modules/]
})
require(`./handlers/${app}.js`)