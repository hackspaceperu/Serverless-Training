// constants.js

const parans = {
    database: {
        mongo: {
            accounts: {
                host: process.env.MONGO_HOST,
                user: process.env.MONGO_USER,
                password: process.env.MONGO_PASSWORD,
                authDatabase: process.env.MONGO_AUTH_DB,
                name: process.env.MONGO_DB_NAME
            }
        },
        sql: {},
        redis: {}
    },
    aws: {
        virginia: {},
        oregon: {}
    },
    endpoints: {
        authenticate: {},
        middleware: {}
    }
}


export {params}

