 const stringiFied = {
     name:'Srikanto',
     Id : 120,
     Job : 'Webdeveloper',
     address:{
         vilage:'Ragadighi',
         Thana : 'Ranisonkoil',

     },
     Familly:{
         member: 6,
         Brother: 'Shamol',
         Mother:'Shusila',
         Father: 'Shusila',
     }
 }
//  console.log(stringiFied);
 const stringiFiedApi = JSON.stringify(stringiFied);
 console.log(stringiFiedApi);
 const converted= JSON.parse(stringiFiedApi);
 console.log(converted)