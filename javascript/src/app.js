// @ts-check
const dotenv = require('dotenv')

dotenv.config({ path: `${__dirname}/../.env` })

const helloWorld = `${process.env.hello || 'hello!'} world`

/* eslint-disable-next-line no-console */
console.log(helloWorld)

// const result = Math.cos(helloWorld) // warning
