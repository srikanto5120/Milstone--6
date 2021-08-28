 function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadPost(data) )
     
 } 
 post()
    function loadPost (posts){
       let postContainer = document.getElementById('post-container');
        for(post of posts){
            const div = document.createElement('div');
            div.classList.add('post')
            div.innerHTML=`
              <h3>${post.title}</h3>,
              <p> ${post.body}</p>,

            `
            postContainer.appendChild(div);
        }
       
    }