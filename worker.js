const { mapLeads } = require('./mapping/base.js');
const { query, upsertLeadsOnLightning } = require('./db/index.js');

let execute = async () => {
    const result = await query('Select * from sfclassic.lead where status = \'Em aberto\' order by createddate desc limit $1', [process.env.NUMERO_REGISTROS_SINCRONIZADOS]);

    let leadsMapeados = mapLeads(result);
    upsertLeadsOnLightning(leadsMapeados);

    console.log('Quantidade de leads mapeados: ' + leadsMapeados.length);
}

execute().catch(err => {
    console.error(err);
    throw err;
});
