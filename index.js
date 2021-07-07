const express = require('express');
const { mapLeads } = require('./mapping/base.js');
const { query } = require('./db/index.js');

const PORT = process.env.PORT || 5000;


express()
  .get('/', (req, res) => res.send('Dispare o processo de sincronismo em /synch/Lead'))
  .get('/sync/Lead', async(req, res) => {
      try {
        const result = await query('Select * from sfclassic.lead where status = \'Em aberto\' order by createddate desc limit 100');
        
        let leads = mapLeads(result);
       
        res.send('Quantidade de leads mapeados: ' + leads.length);

        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))