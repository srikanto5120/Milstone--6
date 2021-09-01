const input = document.getElementById("country-name");
const details = document.getElementById("details-div");
const error = document.getElementById("error");
const errorMsg = document.createElement("div");
const div = document.createElement("div");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (input.value === "") {
    details.innerHTML = "";
    errorMsg.innerHTML = "";
    errorMsg.innerHTML = `<div class="d-flex justify-content-center">
    <p id="warning" class="text-center text-danger bg-light py-1 px-2 rounded d-inline-block">Please Search with a valid country name ⚠️
    </p>
    </div>`;

    error.appendChild(errorMsg);
  } else {
    // error.removeChild(errorMsg);
    const url = `https://api.covid19api.com/total/country/${input.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => loadData(data));
  }
  input.value = "";
});

function loadData(covidInfo) {
  const div = document.createElement("div");
  if (covidInfo.message === "Not found") {
    details.innerHTML = "";
    errorMsg.innerHTML = "";
    errorMsg.innerHTML = `<div class="d-flex justify-content-center">
    <p id="warning" class="text-center text-danger bg-light py-1 px-2 rounded d-inline-block">Please Search with a valid country name ⚠️
    </p>
    </div>`;

    error.appendChild(errorMsg);
  } else {
    const latestUpdate = covidInfo[covidInfo.length - 1];

    details.innerHTML = `
  
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
    details.appendChild(div);
  }
}
