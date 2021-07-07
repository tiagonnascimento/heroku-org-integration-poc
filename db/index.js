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

let upsertLeadsOnLightning = async(leads) => {

    const client = await pool.connect()
    try {
        await client.query('BEGIN')

        const insertText = 'INSERT INTO sflightning.lead( ' +
            'external_id__c, ' +
            'firstname, lastname, name, phone, email, company, industry, ' +
            'street, city, state, country, ' +
            'product_interest__c, leadsource, status, rating, recordtypeid, ' +
            'pi__first_activity__c, pi__last_activity__c, pi__pardot_last_scored_at__c, pi__conversion_date__c, ' +
            'pi__conversion_object_name__c, pi__conversion_object_type__c, pi__campaign__c, pi__url__c, pi__first_touch_url__c, ' +
            'pi__utm_campaign__c, pi__utm_source__c, pi__utm_content__c, pi__utm_medium__c, pi__score__c) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)';

        leads.foreach((lead) => {
            let args = [];
            args.push(lead.external_id__c);
            args.push(lead.firstname);
            args.push(lead.lastname);
            args.push(lead.name);
            args.push(lead.phone);
            args.push(lead.email);
            args.push(lead.company);
            args.push(lead.industry);
            args.push(lead.street);
            args.push(lead.city);
            args.push(lead.state);
            args.push(lead.country);
            args.push(lead.product_interest__c);
            args.push(lead.leadsource);
            args.push(lead.status);
            args.push(lead.rating);
            args.push(lead.recordtypeid);
            args.push(lead.pi__first_activity__c);
            args.push(lead.pi__last_activity__c);
            args.push(lead.pi__pardot_last_scored_at__c);
            args.push(lead.pi__conversion_date__c);
            args.push(lead.pi__conversion_object_name__c);
            args.push(lead.pi__conversion_object_type__c);
            args.push(lead.pi__campaign__c);
            args.push(lead.pi__url__c);
            args.push(lead.pi__first_touch_url__c);
            args.push(lead.pi__utm_campaign__c);
            args.push(lead.pi__utm_source__c);
            args.push(lead.pi__utm_content__c);
            args.push(lead.pi__utm_medium__c);
            args.push(lead.pi__score__c);
            const res = await client.query(insertText, args)
        });

        await client.query('COMMIT')
    } catch (err) {
        client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }

};

module.exports.query = query;
module.exports.upsertLeadsOnLightning = upsertLeadsOnLightning;
