const $titleNameUser = document.querySelector("#titleNameUser");
const $firstNameUser = document.querySelector("#firstNameUser");
const $lastNameUser = document.querySelector("#lastNameUser");
const $pictureContainer = document.querySelector("#pictureContainer")
const $celNumberUser = document.querySelector("#celNumberUser");
const $mailUser = document.querySelector("#mailUser");
const $locationUser = document.querySelector("#locationUser");

async function showData() {
  try {
    const json = await getData();
    const results = json.results;
    console.log(results);
    const names  = results.forEach(({ name, picture, cell, email, location}) => {
      console.log(name);
      $titleNameUser.textContent = `${name.title}`;
      $firstNameUser.textContent = `${name.first}`;
      $lastNameUser.textContent = `${name.last}`;
      $pictureContainer.innerHTML = `<img
      src=${picture.large}
      alt="imagen de perfil"
      width="200px"
      height="200px"
      class="m-3 align-self-center"
    />`
    $celNumberUser.textContent = `Cell number : ${cell}`
    $mailUser.textContent = `E-mail : ${email}`
    $locationUser.textContent = `Address : ${location.street.name} ${location.street.number}`
    });
  } catch (error) {
    console.error("Error en la carga de información");
  }
}

const getData = () => {
  return fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => json);
};

showData();