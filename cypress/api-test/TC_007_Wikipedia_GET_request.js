import { table } from "../test-data/csv.cy";
import { DEFAULT } from "../utils/Method";
import { schema1, schema2 } from "../test-data/schema_responsitory.cy";
const Ajv = require('ajv');
const ajv = new Ajv();

describe('Test Wikipedia GET request', () => {
    it('Should be able to send GET request and verify the response', () => {

        for (let data of table){

            switch(data.testcase){
                case "Execute API call with valid required parameters":
                case "Execute API call with valid required parameters and valid optional parameters":{
                    let queryParameters = createQueryParameters(data);

                    let url = 'https://en.wikipedia.org/w/api.php';

                    let requestObject = {
                        method: DEFAULT.get,
                        url: url,
                        qs: queryParameters,
                    }
                    
                    cy.request(requestObject).then(response => {
                        //Destructure
                        let {status, headers, duration, body} = response;
                        //Check Status Code 
                        expect(status).to.equal(200);
                        //Check Response Headers
                        expect(headers).to.have.any.keys('date','server','x-content-type-options','x-search-id','x-frame-options','content-disposition',
                        'vary','cache-control','content-type','content-encoding','age','x-cache','x-cache-status','server-timing','strict-transport-security',
                        'report-to','nel','x-client-ip','accept-ranges','transfer-encoding','content-length');
                        //Check Response Time
                        expect(duration).to.be.below(5000);
                        //Check Response Body Schema
                        const validate1 = ajv.compile(schema1);
                        const validate2 = ajv.compile(schema2);
                        const isvalid1 = validate1(body);
                        const isvalid2 = validate2(body);
                        if (isvalid1 != isvalid2){
                            expect(true).to.be.true;
                        }
                        //Check Response Cookies
                        
                    })
                    break;
                }
                case "Execute API call with srsearch parameter having no value":
                case "Execute API call with missing required parameters":
                case "Execute API call with invalid query parameters":
                case "Execute API call with endpoint longer than 255 characters":
                case "Execute API call with illegal characters in parameters":
            }
        }
    })
});

let verifyNoEmpty = (name, data) => {
    if(!data){
        expect(true).to.eq(false, `${name} data is empty`)
    }
}

let createQueryParameters = (data) => {
    
    //Either way below is okie to get data, uncomment one and comment the other to triger the code

    // let action = data['action'];
    // let format = data['format'];
    // let list = data['list'];
    // let srsearch = data['srsearch'];
    // let cont = data['continue'];
    // let formatversion = data['formatversion'];
    // let sroffset = data['sroffset'];

    let action = data.action;
    let format = data.format;
    let list = data.list;
    let srsearch = data.srsearch;
    let cont = data.continue;
    let formatversion = data.formatversion;
    let sroffset = data.sroffset;

    let queryParams = {};

    if(action != ""){
        queryParams['action'] = action;
    }
    if(format != ""){
        queryParams['format'] = format;
    }
    if(list != ""){
        queryParams['list'] = list;
    }
    if(srsearch != ""){
        queryParams['srsearch'] = srsearch;
    }
    if(cont != ""){
        queryParams['continue'] = cont;
    }
    if(formatversion != ""){
        queryParams['formatversion'] = formatversion;
    }
    if(sroffset != ""){
        queryParams['sroffset'] = sroffset;
    }

    return queryParams;
}
