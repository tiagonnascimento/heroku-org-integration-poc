import Lead from 'mapping/lead';

let mapLeads = (result) => {
    let leads = [];

    if (result.rows) {
        result.rows.forEach( (row)  => {
            leads.push(new Lead(row));
        });
    }

    return leads;

}

module.exports.mapLeads = mapLeads;