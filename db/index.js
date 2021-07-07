const { Pool } = require('pg');

const pool = new Pool( 
    {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
);

let query = async (query, params) => {
    const start = Date.now()
    const client = await pool.connect();
    const res = await client.query(query, params)
    const duration = Date.now() - start
    console.log('Query executada: ', { query, duration, rows: res.rowCount })
    client.release();
    return res    
};

module.exports.query = query;

