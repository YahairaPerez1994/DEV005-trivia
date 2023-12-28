// En esta parte vamos a darle funcionalidad a nuestra pagina web mediante el lenguaje de programacion
// JS, primero vamos a crear una variable llamada "nombre" usando la palabra reservada let, Esta variable 
// se utilizará para almacenar el nombre del usuario que ingresa en un formulario.
let nombre; //creo la variable para almacenar el nombre
// Se declaran tres variables, opcionPregunta1, opcionPregunta2 y opcionPregunta3, 
// que almacenan las opciones de las preguntas del cuestionario. Estas opciones se 
// obtienen mediante el método getElementsByName, que busca elementos en el documento 
// HTML que tienen el atributo name igual a "namePregunta1", "namePregunta2" y "namePregunta3". 
// Estos elementos son botones de opción (radio buttons) que los usuarios pueden seleccionar como
//  respuestas a las preguntas.
let opcionPregunta1 = document.getElementsByName("namePregunta1");
let opcionPregunta2 = document.getElementsByName("namePregunta2");
let opcionPregunta3 = document.getElementsByName("namePregunta3");

// Se declara una variable llamada respuestasCorrectas e inicializa en 0. Esta variable se utilizará 
// para llevar un seguimiento del puntaje del usuario a medida que responde a las preguntas del cuestionario.
//esta variable almacena el puntaje del usuario
let respuestasCorrectas = 0;

//esta función empieza el juego
// Se define una función llamada empezarPreguntas. Esta función se utilizará para iniciar el juego y 
// mostrar las preguntas al usuario.
function empezarPreguntas() {
  //instrucción para mostrar las preguntas
  // Dentro de la función empezarPreguntas, se utiliza document.getElementById("preguntas").
  // style.display = "block" para cambiar el estilo del elemento con el id "preguntas". 
  // Esto hará que las preguntas sean visibles al establecer su propiedad display en "block".

  document.getElementById("preguntas").style.display = "block";
  //instrucción parar guardar el nombre, para obtener el valor ingresado por el usuario en un campo 
  // de entrada (input) con el id "inputName". El valor se almacena en la variable nombre.
  nombre = document.getElementById("inputName").value;
  
  //imprime la bienvenida incluido el nombre
  // Se utiliza document.getElementById("saludo").innerHTML para cambiar el contenido HTML 
  // del elemento con el id "saludo". El nuevo contenido incluye un mensaje de bienvenida que 
  // muestra el nombre del usuario, que se obtuvo de la variable nombre.
  document.getElementById(
    "saludo"
  ).innerHTML = `Hola ${nombre}, bienvenida a la Trivia de películas`;
}

// Este es el código de una función llamada calcularPuntuacion, que se utiliza para calcular el
//  puntaje de un usuario en un juego de trivia. Aquí está la explicación línea por línea:
function calcularPuntuacion() {

  // Dentro de la función, se inicia una estructura condicional (if) que verifica si la opción 1
  //  de la pregunta 1 ha sido seleccionada por el usuario. opcionPregunta1[1] se refiere a la segunda 
  //  opción (índice 1) de las opciones disponibles para la pregunta 1. El .checked verifica si esta opción 
  //  está marcada como seleccionada (es igual a true).


  //instrucciones que verifican si el usuario acierta
  if (opcionPregunta1[1].checked === true) {
    //si acierta le sumo 10 puntos a la variable respuestas correctas
    respuestasCorrectas = respuestasCorrectas + 10;
  }
  if (opcionPregunta2[2].checked === true) {
    respuestasCorrectas = respuestasCorrectas + 10;
  }
  if (opcionPregunta3[0].checked === true) {
    respuestasCorrectas = respuestasCorrectas + 10;
  }
// Después de calcular el puntaje, se actualiza el contenido de un elemento HTML con el id 
// "puntajeTotal". Este elemento mostrará el puntaje final del usuario. El puntaje se muestra 
// mediante la propiedad innerHTML.
  //Imprimo el puntaje final
  document.getElementById(
    "puntajeTotal"
  ).innerHTML = `Tu puntaje final es: ${respuestasCorrectas}`;
  
  // Luego, se ocultan las preguntas al establecer la propiedad display del elemento con el id 
  // "preguntas" en "none". Esto oculta el conjunto de preguntas después de que el usuario ha respondido.
//oculto las preguntas
  document.getElementById("preguntas").style.display = "none";

  // Finalmente, el puntaje del usuario se restablece a 0, lo que permite reiniciar el juego 
  // o volver a jugar.
  //reseteo el puntaje
  respuestasCorrectas = 0;
}

