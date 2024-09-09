import { createPool } from "mysql2";
import 'dotenv/config'
let connection = createPool({
    host: process.env.HOST ,
    user: process.env.USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE ,
    multipleStatements: true,
    connectionLimit: 30,
})
connection.on('connection', (pool) => {
    if (!pool) throw new Error('Couldn\'t connect to the database, please try again later')
})
export {
    connection
}