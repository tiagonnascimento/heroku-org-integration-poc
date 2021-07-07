export default class Lead {

    // dados não mapeados: isdeleted,systemmodstamp,createddate,id,_hc_lastop,_hc_err	
    constructor (row) {
        
        this.sfid = row.sfid;

            // dados do cliente
        this.firstname = row.firstname;
        this.lastname = row.lastname;
        this.name = row.name;
        this.phone = row.phone;
        this.ddd_convers_o__c = row.ddd_convers_o__c;
        this.email = row.email;
        this.cpf_cnpj__c = row.cpf_cnpj__c;
        this.company = row.company;

            // dados de endereço
        this.endere_o__c = row.endere_o__c;
        this.n_mero__c = row.n_mero__c;
        this.bairro__c = row.bairro__c;
        this.cidade_tela__c = row.cidade_tela__c;
        this.estado__c = row.estado__c;
        this.cep__c = row.cep__c;

            // características do lead
        this.energ_tico_atual__c = row.energ_tico_atual__c;
        this.produtolead__c = row.produtolead__c;
        this.macro_segmento__c = row.macro_segmento__c;
        this.concorrente__c = row.concorrente__c;
        this.leadsource = row.leadsource;
        this.status = row.status;
        this.rating = row.rating;
        this.recordtypeid = row.recordtypeid;
        this.observa_o__c = row.observa_o__c;

            // dados do pardot
        this.pi__first_activity__c = row.pi__first_activity__c;
        this.pi__last_activity__c = row.pi__last_activity__c;
        this.pi__pardot_last_scored_at__c = row.pi__pardot_last_scored_at__c;
        this.pi__created_date__c = row.pi__created_date__c;
        this.pi__conversion_date__c = row.pi__conversion_date__c;
        this.pi__conversion_object_name__c = row.pi__conversion_object_name__c;
        this.pi__conversion_object_type__c = row.pi__conversion_object_type__c;
        this.pi__campaign__c = row.pi__campaign__c;
        this.pi__url__c = row.pi__url__c;
        this.pi__first_search_type__c = row.pi__first_search_type__c;
        this.pi__first_touch_url__c = row.pi__first_touch_url__c;
        this.pi__utm_campaign__c = row.pi__utm_campaign__c;
        this.pi__utm_source__c = row.pi__utm_source__c;
        this.pi__utm_content__c = row.pi__utm_content__c;
        this.pi__utm_medium__c = row.pi__utm_medium__c;
        this.pi__score__c = row.pi__score__c;

        console.log('Criando Lead de registro da tabela. Lead resultante: ' + JSON.stringify(this));

    }


    getLeadLightning() {

    }
}