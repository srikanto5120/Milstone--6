const input = document.getElementById("input");

const button = document.getElementById("button");
button.addEventListener("click", (id) => {
  debugger;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=fbeb844b9230c3882328a2fce26ed686`
  )
    .then((res) => res.json())
    .then((data) => temp(data));
});
const temp = (tem) => {
  const temp = document.getElementById("temp");

  const temparature = document.createElement("div");

  const degree = parseInt(tem.main.temp - 273);
  temparature.innerHTML = `
    <div class="weather-status  text-center">
           <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
           <h1>${tem.name}</h1>
           <h3><span>${degree}</span>&deg;C</h3>
           <h1 class="lead">Clouds</h1>
       </div>

    `;
  temp.appendChild(temparature);

  input.value = "";
};
