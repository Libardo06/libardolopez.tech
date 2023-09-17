let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("fiabilidad");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//DESHABILITADO TEMPORALMENTE

/* function enviarDatos(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
  
    // Obtener una referencia al formulario
    var formulario = document.getElementById("miFormulario");
  console.log("Formulario ",formulario)
    // Obtener los datos del formulario
    var formData = new FormData(formulario);
  
    console.log("Form DAt",formData)

    var nombre = formData.get("nombre");
var telefono = formData.get("telefono");
var correo = formData.get("correo");
var tema = formData.get("tema");
var mensaje = formData.get("mensaje");

var urlencoded = new URLSearchParams();
urlencoded.append("nombre", nombre);
urlencoded.append("telefono",  telefono);
urlencoded.append("correo", correo);
urlencoded.append("tema", tema);
urlencoded.append("mensaje", mensaje)

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  
    // Realizar una solicitud POST utilizando fetch
    fetch("https://libardo06.github.io/API-SEND-Mail//enviar-correo", requestOptions)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        // Manejar la respuesta de la solicitud fetch aquí
        console.log(data);
      })
      .catch(function (error) {
        // Manejar errores aquí
        console.error(error);
      });
  } */