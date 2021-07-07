const express = require('express')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .get('/', (req, res) => res.send('Dispare o processo de sincronismo em /synch/Lead'))
  .get('/synch/Lead', async(req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('Select * from sfclassic.lead where status = \'Em aberto\' order by createddate desc limit 1000');
        const results = { 'results': (result) ? result.rows : null };

        res.send('Tamanho do batch: ' + results.length);

        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))