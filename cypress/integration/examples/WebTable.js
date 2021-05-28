///<referece types ="cypress"/>

describe('WebTable', function(){

    it('table test',function(){
       cy.visit('testautomationpractice.blogspot.com/')
       //td => coloum  tr=> row
//how to check precence anywher in the table
   //first we need to locakte table then we need to locate where expected data is eith td tag 
   //bcs td(table data) has the value how?
   // it will check all td and verify expected data is visible
   //provide 2 parameters to contains() td =>all table data then expected date

   cy.get('table').contains('td','Learn Selenium').should('be.visible')
  
//specific row and colomn 
//get 2nd row 3rd colum verify Selenium 
cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should('be.visible')
//get 6th row 2nd colum verify Amod 
cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('Amod').should('be.visible')

 })
//   it('table', function(){
//       //check value based on the condition by itiration rows
// //tc i ll check Amod as author than verify Master in JAva is bookname
// //i ll search amod when i foun d i ll verify book which is written by amod
// //first we should locate author colum 

// cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e1,index,$list)) => {

//      const text =$e1.text()
//     if(text.includes("Amod"))
//     {
//         cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
//         {
//             const bookname = bname.text()
//             expect(bookname).to.equal("Master in Java")
//         })
//     }

//    })

//   })


})