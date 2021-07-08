const express = require('express');
const { mapLeads } = require('./mapping/base.js');
const { query, upsertLeadsOnLightning } = require('./db/index.js');

const PORT = process.env.PORT || 5000;


express()
  .get('/', (req, res) => res.send('Dispare o processo de sincronismo em /synch/Lead'))
  .get('/sync/Lead', async(req, res) => {
      try {
        const result = await query('Select * from sfclassic.lead where status = \'Em aberto\' order by createddate desc limit $1', [process.env.NUMERO_REGISTROS_SINCRONIZADOS]);
        
        let leadsMapeados = mapLeads(result);
        upsertLeadsOnLightning(leadsMapeados);
       
        res.send('Quantidade de leads mapeados: ' + leadsMapeados.length);

        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))