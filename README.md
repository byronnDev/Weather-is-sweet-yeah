# Weather App

Este proyecto es una aplicación web que muestra información meteorológica para una ciudad determinada. Utiliza la API de OpenWeatherMap para obtener datos meteorológicos y muestra la temperatura actual, la temperatura mínima y máxima, y una imagen que representa el clima actual. La aplicación está desarrollada con HTML, CSS, JavaScript, Bootstrap, Sass y jQuery.

## Funcionalidades

- Muestra la temperatura actual, la temperatura mínima y máxima, y una imagen que representa el clima actual para una ciudad determinada.
- Permite buscar el clima de cualquier ciudad del mundo.
- Utiliza la geolocalización para mostrar el clima de la ubicación actual del usuario.
- Es responsive y se adapta a diferentes tamaños de pantalla.
  
## Características

- Diseño responsive con Bootstrap y Sass, siguiendo los principios de mobile first.
- Single Page Application (SPA) que solo tiene un archivo HTML y muestra u oculta los componentes según la opción del menú seleccionada.
- Formulario para buscar el tiempo por el nombre de la ciudad, con opción de obtener el tiempo actual y la predicción para los próximos 4 días.

## Tecnologías utilizadas

- HTML
- CSS (SASS)
- JavaScript
- jQuery
- Bootstrap
- API de OpenWeatherMap

## Instalación

Si quieres ejecutar la aplicación solo abriendo el archivo index.html, puedes hacerlo de la siguiente manera:

1. Clonar el repositorio con `git clone https://github.com/byronnDev/Weather-is-sweet-yeah.git`
2. Entrar en la carpeta del proyecto con `cd Weather-is-sweet-yeah`
3. Abrir el archivo `index.html` en un navegador web.
4. Permitir el acceso a la ubicación del usuario si se desea utilizar la geolocalización.
5. Buscar el clima de una ciudad o utilizar la geolocalización para obtener el clima de la ubicación actual.
## Recomendación si no funciona

Para usar este proyecto, necesitas obtener una clave de API de OpenWeatherMap y reemplazar la variable `apiKey` en el archivo `weather.js`. El archivo tiene este aspecto:

```js
// Obtener la clave de API de https://openweathermap.org/api
const apiKey = "tu clave aquí"; // Define an API key

// Otras variables y funciones
```
