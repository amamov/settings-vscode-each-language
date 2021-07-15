import * as dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/../.env` })

const helloWorld = `${process.env.hello || 'hello!'} world`

/* eslint-disable-next-line no-console */
console.log(helloWorld)
