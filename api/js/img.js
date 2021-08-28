function loadImg(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => img(data))
}
loadImg()
function img(imgs){
    const imgContainer =document.getElementById('img-container')
    for (img of imgs ){
         console.log(img)
         const div =document.createElement('div');
         div.innerHTML=`
         <h3> ${img.title} </h3>;
         <img src="${img.url}" alt="">
         <img src="${img.thumbnailUrl}" alt="">
         `
         imgContainer.appendChild(div)
    }
   
}