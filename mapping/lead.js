
    // dados não mapeados da origem do lead: isdeleted,systemmodstamp,createddate,id,_hc_lastop,_hc_err	
    // TODO: este é apenas um exemplo de mapeamento - não existem regras complexas de mapeamento implementadas aqui,
    // que devem ser estabelecidas e discutidas em tempo de projeto
let mapLead = (row) => {
    
    let lead = {};
    
    lead.external_id__c = row.sfid;

        // dados do cliente
    lead.firstname = row.firstname;
    lead.lastname = row.lastname;
    lead.name = row.name;
    lead.phone = row.ddd_convers_o__c + row.phone;
    lead.email = row.email;
    // lead.cpf_cnpj__c = row.cpf_cnpj__c; // campo não mapeado no destino
    lead.company = row.company;
    lead.industry = 'Industria Padrão';

        // dados de endereço
    lead.street = row.endere_o__c + ', ' + row.n_mero__c + ', ' + row.bairro__c;
    lead.city = row.cidade_tela__c;
    lead.state = row.estado__c;
    // lead.cep__c = row.cep__c;
    lead.country = 'Brasil';

        // características do lead
    // lead.energ_tico_atual__c = row.energ_tico_atual__c; // campo não mapeado no destino
    lead.product_interest__c = row.produtolead__c;
    // lead.macro_segmento__c = row.macro_segmento__c; // campo não mapeado no destino
    // lead.concorrente__c = row.concorrente__c; // campo não mapeado no destino
    lead.leadsource = row.leadsource;
    lead.status = row.status;
    lead.rating = row.rating;
    lead.recordtypeid = '0125e000001CO5TAAW';
    // lead.observa_o__c = row.observa_o__c; // campo não mapeado no destino

        // dados do pardot
    lead.pi__first_activity__c = row.pi__first_activity__c;
    lead.pi__last_activity__c = row.pi__last_activity__c;
    lead.pi__pardot_last_scored_at__c = row.pi__pardot_last_scored_at__c;
    // lead.pi__created_date__c = row.pi__created_date__c; // campo não mapeado no destino
    lead.pi__conversion_date__c = row.pi__conversion_date__c;
    lead.pi__conversion_object_name__c = row.pi__conversion_object_name__c;
    lead.pi__conversion_object_type__c = row.pi__conversion_object_type__c;
    lead.pi__campaign__c = row.pi__campaign__c;
    lead.pi__url__c = row.pi__url__c;
    // lead.pi__first_search_type__c = row.pi__first_search_type__c; // campo não mapeado no destino
    lead.pi__first_touch_url__c = row.pi__first_touch_url__c;
    lead.pi__utm_campaign__c = row.pi__utm_campaign__c;
    lead.pi__utm_source__c = row.pi__utm_source__c;
    lead.pi__utm_content__c = row.pi__utm_content__c;
    lead.pi__utm_medium__c = row.pi__utm_medium__c;
    lead.pi__score__c = row.pi__score__c;

    console.log('Criando Lead segundo mapeamento de destino. Lead resultante: ' + JSON.stringify(lead));

    return lead;

}

module.exports.mapLead = mapLead;