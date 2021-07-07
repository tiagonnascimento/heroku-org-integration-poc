
    // dados não mapeados: isdeleted,systemmodstamp,createddate,id,_hc_lastop,_hc_err	
let mapLead = (row) => {
    
    let lead = {};
    
    lead.sfid = row.sfid;

        // dados do cliente
    lead.firstname = row.firstname;
    lead.lastname = row.lastname;
    lead.name = row.name;
    lead.phone = row.phone;
    lead.ddd_convers_o__c = row.ddd_convers_o__c;
    lead.email = row.email;
    lead.cpf_cnpj__c = row.cpf_cnpj__c;
    lead.company = row.company;

        // dados de endereço
    lead.endere_o__c = row.endere_o__c;
    lead.n_mero__c = row.n_mero__c;
    lead.bairro__c = row.bairro__c;
    lead.cidade_tela__c = row.cidade_tela__c;
    lead.estado__c = row.estado__c;
    lead.cep__c = row.cep__c;

        // características do lead
    lead.energ_tico_atual__c = row.energ_tico_atual__c;
    lead.produtolead__c = row.produtolead__c;
    lead.macro_segmento__c = row.macro_segmento__c;
    lead.concorrente__c = row.concorrente__c;
    lead.leadsource = row.leadsource;
    lead.status = row.status;
    lead.rating = row.rating;
    lead.recordtypeid = row.recordtypeid;
    lead.observa_o__c = row.observa_o__c;

        // dados do pardot
    lead.pi__first_activity__c = row.pi__first_activity__c;
    lead.pi__last_activity__c = row.pi__last_activity__c;
    lead.pi__pardot_last_scored_at__c = row.pi__pardot_last_scored_at__c;
    lead.pi__created_date__c = row.pi__created_date__c;
    lead.pi__conversion_date__c = row.pi__conversion_date__c;
    lead.pi__conversion_object_name__c = row.pi__conversion_object_name__c;
    lead.pi__conversion_object_type__c = row.pi__conversion_object_type__c;
    lead.pi__campaign__c = row.pi__campaign__c;
    lead.pi__url__c = row.pi__url__c;
    lead.pi__first_search_type__c = row.pi__first_search_type__c;
    lead.pi__first_touch_url__c = row.pi__first_touch_url__c;
    lead.pi__utm_campaign__c = row.pi__utm_campaign__c;
    lead.pi__utm_source__c = row.pi__utm_source__c;
    lead.pi__utm_content__c = row.pi__utm_content__c;
    lead.pi__utm_medium__c = row.pi__utm_medium__c;
    lead.pi__score__c = row.pi__score__c;

    console.log('Criando Lead de registro da tabela. Lead resultante: ' + JSON.stringify(lead));

    return lead;

}

module.exports.mapLead = mapLead;