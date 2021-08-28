function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respose => respose.json() )
    .then (json => console.log(json));
}
function loadPost(){
   fetch(' https://jsonplaceholder.typicode.com/users')
   .then(res =>res.json())
   .then(user => displayUser(user) );
}
function displayUser(users){
   for(user of users){
      const ul = document.getElementById('ul');
      const li = document.createElement('li');
      li.innerText= `  user name $ : ${user.name} , 
      This is a user email : ${user.email}`
      ul.appendChild(li)
   }
}