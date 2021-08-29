const randomUser = () => {
  fetch("https://randomuser.me/api/?results=50 ")
    .then((res) => res.json())
    .then((data) => user(data.results[0]));
};
randomUser();
//selection
const user = (user) => {
  const intro = document.getElementById("intro");
  const display = document.getElementById("display");
  const profile = document.getElementById("profile");
  const email = document.getElementById("email");
  const dob = document.getElementById("dob");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const password = document.getElementById("password");

  profile.src = `${user.picture.large}`;
  display.innerText = `${user.name.title} ${user.name.first} ${user.name.last} `;
  intro.innerText = "Hi my Name is !";
  // set name
  document.getElementById("name").addEventListener("mouseover", () => {
    intro.innerText = "Hi my Name is !";
    display.innerText = `${user.name.title} ${user.name.first} ${user.name.last} `;
  });
  // name email
  document.getElementById("email").addEventListener("mouseover", () => {
    display.innerText = `${user.email} `;
    intro.innerText = "This is my Email";
  });
  // name date of birth
  document.getElementById("dob").addEventListener("mouseover", () => {
    intro.innerText = "My birthday is";
    display.innerText = `${user.dob.date.slice(0, 10)}`;
  });
  // set phone
  document.getElementById("phone").addEventListener("mouseover", () => {
    intro.innerText = "My phone number is";
    display.innerText = `${user.cell}`;
  });
  // set address
  document.getElementById("address").addEventListener("mouseover", () => {
    intro.innerText = "My address is";
    display.innerText = `${user.location.postcode} ${user.location.city} ${user.location.state}`;
  });
  // set password
  document.getElementById("password").addEventListener("mouseover", () => {
    intro.innerText = "My password is";
    display.innerText = `${user.login.password}`;
  });
};
