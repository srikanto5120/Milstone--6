 const loadQuote = () =>{
     fetch('https://randomuser.me/api/?results=5')
       
     .then(res => res.json())
     .then(data => clicke(data))
 }
  

 const clicke = quote =>{
     const blockQuote = document.getElementById('blockQuote');
     blockQuote.innerText = quote.quote
 }