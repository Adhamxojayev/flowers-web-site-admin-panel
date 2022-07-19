const { Pool } = require('pg')
const { pgConfig } = require('../config')

const pool = new Pool(pgConfig)

console.log(pool);

async function fetch (SQL, ...params) {
    const client = await pool.connect()
    try {
        const { rows: [row] } = await client.query(SQL, params.length ? params : null)
        return row
    } catch (error) {
        console.error(error);
    }finally{
        await client.release()
    }
}


async function  fetchAll (SQL, ...params) {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } catch (error) {
        console.error(error);
    }finally{
        await client.release()
    }
}


module.exports = {
    fetchAll, fetch
}