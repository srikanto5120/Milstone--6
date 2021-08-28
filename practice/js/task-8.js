const search = () =>{
    const input = document.getElementById('input');
    const inputText = input.value;
    // console.log('clicke')
    fetch( `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputText}`)
  
    .then(res => res.json())
    .then (data => loadData(data.teams));
   
    input.value='';
  
}
 const loadData = (element) =>{
     for(ele of element){
          const teamId=(ele.idTeam);
        // console.log(teamId)
        teamDetails(teamId)
     }  
}
 
  const teamDetails = (id) =>{
    //   console.log(id)
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
    
    fetch(url)
    .then(res =>res.json())
    .then(data =>  team(data.teams))
     
 
  } 
  
  

   const team =  clubs=>{
      clubs.forEach (club =>{
          
        const clubContainer = document.getElementById('club-container');
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="col">
        <div class="card">
          <img src="${club.strTeamBadge}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> ${club.strTeam}</h5>
            <h4 class="card-title"> ${club.strCountry}</h4>
            <p class="card-title">${club.strDescriptionEN.slice(0,150)}  </p>
            
          </div>
        </div>
        `;
        clubContainer.appendChild(div) 
      })
      
    }
      
 
  