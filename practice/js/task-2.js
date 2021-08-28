const randomUser =() =>{
    fetch('https://randomuser.me/api/?results=50 ')
    .then(res => res.json())
    .then(data => loadUser(data.results))
   
}
const loadUser = users =>{
 for( user of users){
     console.log(user)
 }
 const userDetails =document.getElementById('user-details');
 const div= document.createElement('div');
 div.classList.add('text-center')
 
 div.innerHTML=`
 <img src=" ${user.picture.large} " alt="">
 <h2>Country : ${user.location.country}</h2>
 <h3>Country : ${user.location.city}</h3>
 <h4>Country : ${user.location.postcode}</h4>
 <h5>Country : ${user.location.state}</h5>

 
 `;
 
 userDetails.appendChild(div);
  


}