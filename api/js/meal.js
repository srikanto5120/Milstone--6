const eror = document.getElementById('pragh');
const buttonClick =async() =>{
    const searchInput = document.getElementById('search-input');
    const searchInputText = searchInput.value;
    searchInput.value = '';
    
    eror.innerText ='';
    if(searchInputText==0){
        eror.innerText='Write something';
        eror.style.color ='salmon';
    }
   else{
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText} `

    const res = await fetch(url);
    const data = await res.json();
    loadFood(data.meals)
/*     fetch(url)
    .then(res =>res.json())
    .then(data => loadFood(data.meals)) */
   }
}
const loadFood=(meals) =>{
     if(meals.length== 0){
        eror.innerText= "Not found"
     }
    const searchResult =document.getElementById('search-result');
    searchResult.textContent ='';
    for(food of meals){
         
        const div= document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div  class="card">
          <img src="${food.strMealThumb}" class="card-img-top h-75 " alt="...">
          <div class="card-body">
            <h5 class="card-title">${food. strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0,200)}</p>
            <button class="btn bg-primary text-white" onclick="loadMeal(${food.idMeal})">Details</button>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    }
    
}
const loadMeal = async mealId =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   const res = await (url);
   const data =  await res.json();
   singleMealDetails (data.meals[0])

   /* fetch(url)
   .then(res =>res.json())
   .then(data =>singleMealDetails (data.meals[0])) */
}
const singleMealDetails = singleMeal =>{
const mealDetails = document.getElementById('meal-details');
mealDetails.textContent = '';
 const div =document.createElement('div');
 div.classList.add('card');
 div.innerHTML =`
 <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${singleMeal.strMeal}</h5>
   <p class="card-text">${singleMeal.strInstructions.slice(0,100)}</p>
   <a href=" ${singleMeal.strYoutube}  " target= '_blank ' class="btn btn-primary">Go somewhere</a>
 </div>
 `
 mealDetails.appendChild(div);

 
}