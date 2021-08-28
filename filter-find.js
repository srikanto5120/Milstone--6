const numbers = [10,2,12,15,5,4,7,8,9,5,4,50];
const bigNumber = numbers.filter(number  => number > 20);

const products  = [ 
   { name:'phone', price:5200, id:12, color:'red'},
   { name:'tv', price:8200, id:1, color:'green'},
   { name:'laptop', price:52001, id:22, color:'red'},
   { name:'watch', price:600, id:12, color:'yellow'},
   { name:'monitor', price:12000, id:15, color:'pink'}
]
 
const expensive  = products.find(product => product.color == 'red')
console.log(expensive);