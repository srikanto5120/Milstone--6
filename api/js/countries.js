 const loadCountries = ()=>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data =>cpuntries(data) )
  
     
 }
 loadCountries()
 
 const cpuntries = (countries) =>{
     const countriesDiv= document.getElementById('countries');
     for(countriy of countries){
         countries.forEach(countriy =>{
              const div= document.createElement('div');
              div.classList.add('country');
              div.innerHTML=`
              <h3>${countriy.name}</h3>
              <p>${countriy.name}</p>
              <button onclick="countryDetails('${countriy.name}')" >Details</button>
              `
              countriesDiv.appendChild(div) 

               
         })
     }
 }
 const countryDetails= (desh)=>{
  
      const url =` https://restcountries.eu/rest/v2/name/${desh}`;
      fetch(url)
      .then(res =>res.json())
      .then(data =>  load(data[0]))

 }
 const load=data=>{
     const countryDetails =document.getElementById('country-details');
     const div =document.createElement('div');
     div.innerHTML=`
     <h5>${data.name}</h5>
     <p>${data.population}</p>
     <img src="${data.flag}" alt="">
     `
     countryDetails.appendChild(div);
 }