import restify from 'restify'
import Notifications from './server/Routes/Notifications'

const signale = require('signale')

const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
    allowHeaders : [ 'X-App-Version' ],
    exposeHeaders: [],
    origins      : [ '*' ]
})

const server = restify.createServer({
    name: 'Hackspace'
})

const RR = require('restify-router')

const router = new RR.Router()

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
server.pre(cors.preflight)
server.use(cors.actual)



router.add('/notifications', Notifications)
router.applyRoutes(server)


server.get('/', (req, res)=>{
    res.json({ date: Date.now(), service: process.env.APPLICATION, version: 'v1' })
})

server.listen(process.env.PORT_REST, ()=>{
    signale.success(`[Hackspace] Server ready at ${process.env.PORT_REST}`)
})