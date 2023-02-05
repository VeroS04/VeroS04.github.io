const containerInicio = document.getElementById("container-inicio");
const body = document.getElementById("body");
const inicio = document.getElementById("inicio");
const sobreMi = document.getElementById("sobre-mi");
const habilidades = document.getElementById("habilidades");
const contactame = document.getElementById("contactame");
const sobreMiContainer = document.getElementById("sobre-mi-container");
const imgFoto = document.getElementById("img-foto");


let scale = 0.5;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.001;

  scale = Math.min(Math.max(.18, scale), 1);

  containerInicio.style.transform = `scaleY(${scale})`;
  contactame.style.transform = `scaleY(${scale})`;
}

const girar = () => {
  imgFoto.style.transform= "rotatey(360deg)";
  imgFoto.style.transition= "5s";
  sobreMiContainer.style.backgroundImage= "url(https://i.pinimg.com/564x/28/10/ab/2810ab2ee51fa41804a3ee044c54e8e5.jpg)"
  sobreMiContainer.style.backgroundRepeat= "no-repite";
  sobreMiContainer.style.backgroundSize= "cover";
}

sobreMi.addEventListener("click", () => {
  girar()
})

body.onwheel = zoom;