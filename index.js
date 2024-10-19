const btn = document.querySelector(".btn");

const color = document.querySelector(".color");
const format = document.querySelector(".format");

const navLinks = document.querySelectorAll("nav ul li a");

let hexColor;

/// obtiene el color desde la api por primera vez
getColor().then(data => {
  hexColor = data;

  document.body.style.backgroundColor = hexColor[format.textContent].value;
  color.textContent = hexColor[format.textContent].value;
  color.style.color = hexColor[format.textContent].value;

}).catch(error => {
  console.log(error);
})

function randomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

async function getColor(value = "f1f5f8") {

  try {
    const url = `https://www.thecolorapi.com/id?hex=${value}`;
    const data = await (await fetch(url)).json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }

}

/// cada vez que el usuario hace click, 
/// se cambia el color de fondo y el color del texto ademas de cambiar el "formato"
btn.addEventListener("click", async () => {
  hexColor = await getColor(randomHexColor());

  document.body.style.backgroundColor = format.textContent === "name" ? hexColor[format.textContent]["closest_named_hex"] : hexColor[format.textContent].value;
  color.textContent = hexColor[format.textContent].value;
  color.style.color = format.textContent === "name" ? hexColor[format.textContent]["closest_named_hex"] : hexColor[format.textContent].value;
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target.textContent, hexColor[e.target.textContent]);

    if (hexColor[e.target.textContent]) {
      format.textContent = e.target.textContent;
      document.body.style.backgroundColor = hexColor[e.target.textContent].value;
      color.style.color = hexColor[e.target.textContent].value;
      color.textContent = hexColor[e.target.textContent].value;
    }

  })
})