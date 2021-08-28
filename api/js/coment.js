 function loadComment(){
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res =>res.json())
     .then(data =>comment(data))
 }
 loadComment()
 function comment(data){
     const commentSection = document.getElementById('comment-container')
     
     for(coment of data){
         console.log(coment)
         const div = document.createElement('div');
         div.classList.add('comment')
         div.innerHTML=`
         <h2> ${coment.name} </h2>,
         <h3> ${coment.email} </h3>,
         <p> ${coment.body} </p>
         `
         commentSection.appendChild(div)
     }
 }