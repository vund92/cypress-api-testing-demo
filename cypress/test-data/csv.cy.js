// const neatCSV = require('neat-csv');

// describe('Read CSV', () => {
//     let table;
//     before(() => {
//         cy
//         .fixture('SMGAPIAutoTestData.csv')
//         .then(neatCSV) //convet csv file into an object
//         .then(data => {
//             table = data;
//         }) 
//         .then(console.table)
//     });
//     it('Fill input fields using CSV data', () => {
        
//     })
// });

const neatCSV = require('neat-csv');

let table;

describe('Read CSV', () => {
    it('Should be able to read data from CSV file', () => {
        cy
        .fixture('SMGAPIAutoTestData.csv')
        .then(neatCSV) //convet csv file into an object
        .then(data => {
            table = data;
        })
        //.then(console.table)
    });   
});

export {table};

