 function loadAlbum(){
     fetch('https://jsonplaceholder.typicode.com/albums')
     .then(res => res.json())
     .then(data => album(data) )

     
 }
 loadAlbum();
 function album(albums){
     const albumContainer = document.getElementById('album-container')
     for (album of albums){
         const div = document.createElement('div');
         div.classList.add('album')
         div.innerHTML=`
         <h1> ${album.id} </h1>,
         <p> ${album.title} </p>
         `
         albumContainer.appendChild(div)
     }
 }