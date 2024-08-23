<h1>Juego del Número Secreto</h1>  

Este es un simple juego interactivo en JavaScript donde el usuario intenta adivinar un número secreto generado aleatoriamente. El juego proporciona pistas para ayudar al usuario a acercarse al número secreto. 

## Descripción del Juego

El juego selecciona un número secreto aleatorio entre 1 y un número máximo definido (por defecto, 10). El usuario ingresa su intento de adivinar el número y el juego le indica si el número ingresado es mayor o menor que el número secreto. El juego continúa hasta que el usuario adivina correctamente el número secreto.

## Funcionalidades

- **Generación de número secreto:** Se genera un número aleatorio entre 1 y el número máximo definido.
- **Verificación de intento:** El juego compara el número ingresado por el usuario con el número secreto y proporciona retroalimentación.
- **Reinicio del juego:** Una vez que el número ha sido adivinado correctamente, el usuario puede reiniciar el juego.

## Archivos

- `index.html`: Contiene la estructura básica del HTML para el juego.
- `styles.css`: Define el estilo y diseño visual de la aplicación.
- `app.js`: Contiene la lógica del juego en JavaScript.

## Estructura del Código

- **Variables principales:**
  - `numeroSecreto`: Guarda el número secreto generado aleatoriamente.
  - `intentos`: Cuenta el número de intentos realizados por el usuario.
  - `listaNumerosSorteados`: Guarda los números ya sorteados para evitar repetición.
  - `numeroMaximo`: Define el número máximo posible para el número secreto.

- **Funciones principales:**
  - `asignarTextoElemento(elemento, texto)`: Actualiza el contenido HTML de un elemento específico.
  - `verificarIntento()`: Verifica si el número ingresado por el usuario coincide con el número secreto.
  - `limpiarCaja()`: Limpia el campo de entrada donde el usuario ingresa su número.
  - `generarNumeroSecreto()`: Genera un número aleatorio y verifica que no haya sido sorteado anteriormente.
  - `condicionesIniciales()`: Establece el estado inicial del juego.
  - `reiniciarJuego()`: Reinicia el juego, permitiendo que el usuario juegue nuevamente.

## Cómo jugar

1. El juego muestra un mensaje pidiendo al usuario que ingrese un número entre 1 y 10.
2. El usuario ingresa su número en el campo de entrada.
3. El juego indica si el número secreto es mayor o menor que el número ingresado.
4. El usuario sigue intentando hasta que adivina el número correcto.
5. El juego muestra un mensaje de éxito y habilita el botón para reiniciar el juego.

## Ejecución

Para ejecutar el juego, simplemente abre el archivo `index.html` en tu navegador web favorito.

## Tecnologías Utilizadas

- **HTML5:** Para la estructura básica de la página.
- **CSS3:** Para el estilo y diseño de la interfaz.
- **JavaScript (ES6):** Para la lógica del juego.

## Mejoras Futuras

- Agregar un contador de intentos fallidos.
- Ampliar el rango de números posibles para hacer el juego más desafiante.
- Incluir un temporizador para agregar presión y dificultad al juego.
- Mejorar la interfaz gráfica con animaciones y efectos visuales.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de hacer un fork, crear un branch con tus mejoras y enviar un pull request.

---

¡Disfruta jugando al Juego del Número Secreto y buena suerte intentando adivinar el número correcto!
