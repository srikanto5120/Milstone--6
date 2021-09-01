// 1. collecting a api url
// 2. fetching the data with the api
// 3. print the data in consol and try to understand the data type...
// 4 make a UI
// 5. Show the data on your UI.
// 6. make simple validation like check form value and sever response

// TODO: API
/* 
https://api.covid19api.com/total/country/bangladesh
https://api.covid19api.com/summary
*/
// fetch(api).then(function (res) {
//    return res.json();
// }).then(function (data) {
//     console.log(data);
// })

var detailsDiv = document.getElementById("details-div");
const errorMsg = document.createElement("div");
document.getElementById("btn").addEventListener("click", () => {
  const countryName = document.getElementById("country-name");
  if (countryName.value == "") {
    errorMsg.innerHTML = `<div class="d-flex justify-content-center">
        <p id="warning" class="text-center text-danger bg-light py-1 px-2 rounded d-inline-block">Please Search with a valid country name ⚠️
        </p>
        </div>`;
    detailsDiv.innerHTML = "";
    detailsDiv.appendChild(errorMsg);
  } else {
    getData(countryName.value);
    countryName.value = "";
  }
});

function getData(country) {
  const api = `https://api.covid19api.com/total/country/${country}`;
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "Not Found") {
        errorMsg.innerHTML = `<div class="d-flex justify-content-center">
                <p id="warning" class="text-center text-danger bg-light py-1 px-2 rounded d-inline-block">Please Search with a valid country name ⚠️
                </p>
                </div>`;
        detailsDiv.innerHTML = "";
        detailsDiv.appendChild(errorMsg);
      } else {
        showData(data);
      }
    });

  function showData(covidArray) {
    const latestUpdate = covidArray[covidArray.length - 1];
    var div = document.createElement("div");
    div.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-white text-center mb-3">Country Name: ${
          latestUpdate.Country
        } </h5>
        <hr>
        <h6 class="card-subtitle mb-2 text-secondary">Confirmed: ${
          latestUpdate.Confirmed
        } </h6>
        <h6 class="card-subtitle mb-2 text-success">Active: ${
          latestUpdate.Active
        }</h6>
        <h6 class="card-subtitle mb-2 text-warning">Deaths: ${
          latestUpdate.Deaths
        } </h6>
        <h6 class="card-subtitle mb-2 text-primary">Date:${latestUpdate.Date.slice(
          0,
          10
        )}  </h6>
    </div>
</div>`;
    detailsDiv.innerHTML = "";
    detailsDiv.appendChild(div);
  }
}
