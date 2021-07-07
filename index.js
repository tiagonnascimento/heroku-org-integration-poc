const express = require('express');
const { mapLeads } = require('./mapping/base.js');
const { Pool } = require('pg');

const PORT = process.env.PORT || 5000;

const pool = new Pool( {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .get('/', (req, res) => res.send('Dispare o processo de sincronismo em /synch/Lead'))
  .get('/sync/Lead', async(req, res) => {
      try {
          const client = await pool.connect();
          const result = await client.query('Select * from sfclassic.lead where status = \'Em aberto\' order by createddate desc limit 1000');
          
          let leads = mapLeads(result);
          
          client.release();
          
          res.send('Quantidade de leads mapeados: ' + leads.length);

        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))