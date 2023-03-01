const $titleNameUser = document.querySelector("#titleNameUser");
const $firstNameUser = document.querySelector("#firstNameUser");
const $lastNameUser = document.querySelector("#lastNameUser");
const $pictureContainer = document.querySelector("#pictureContainer")

async function showData() {
  try {
    const json = await getData();
    const results = json.results;
    console.log(results);
    const names = results.forEach(({ name, picture }) => {
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

// let boton1 = document.getElementById("botonSobreMi");
// let cuadroSobreMi = document.getElementById("cuadroSobreMi");
// boton1.addEventListener("mousemove", () => {
//   cuadroSobreMi.style.backgroundColor = "lightblue";
// });
// boton1.addEventListener("mouseout", () => {
//   cuadroSobreMi.style.backgroundColor = "";
// });
// boton1.addEventListener("click", () => {
//   cuadroSobreMi.style.display = "block";
// });

// boton1.addEventListener("cl", () => {
//   cuadroSobreMi.style.display = "none";
// });

// let boton2 = document.getElementById("botonContacto");
// let cuadroContacto = document.getElementById("cuadroContacto");
// boton2.addEventListener("mousemove", () => {
//   cuadroContacto.style.backgroundColor = "lightblue";
// });
// boton2.addEventListener("click", () => {
//     cuadroContacto.style.display = "block";
//   });
// boton2.addEventListener("mouseout", () => {
//   cuadroContacto.style.backgroundColor = "";
// });

// boton2.addEventListener("dblclick", () => {
//   cuadroContacto.style.display = "none";
// });

// let boton3 = document.getElementById("botonEstudios");
// let cuadroEstudios = document.getElementById("cuadroEstudios");
// boton3.addEventListener("mousemove", () => {
//   cuadroEstudios.style.backgroundColor = "lightblue";
// });
// boton3.addEventListener("mouseout", () => {
//   cuadroEstudios.style.backgroundColor = "";
// });
// boton3.addEventListener("mousemove", () => {
//   cuadroEstudios.style.display = "block";
// });

// boton3.addEventListener("mouseout", () => {
//   cuadroEstudios.style.display = "none";
// });
