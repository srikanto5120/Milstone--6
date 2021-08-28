  const commentFunc=() =>{
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => loadData (data))
  }
  commentFunc()

  const loadData = comments =>{
    for(comment of comments){
        const commentContainer = document.getElementById('comment-container');
        const div =document.createElement('div');
        div.classList.add('comment')
        div.innerHTML=`
        <h4> ${comment.title}</h4>
        <p>${comment.body}</p>
        
        `;
        commentContainer.appendChild(div);
    }

  }