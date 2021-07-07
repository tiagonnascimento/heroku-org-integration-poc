const { mapLead } = require('./lead.js');

let mapLeads = (result) => {
    let leads = [];

    if (result.rows) {
        result.rows.forEach( (row)  => {
            leads.push(mapLead(row));
        });
    }

    return leads;

}

module.exports.mapLeads = mapLeads;