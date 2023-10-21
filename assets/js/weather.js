/**
 * @fileoverview JS file for Weather is sweet, yeah! exercise
 * @version 1.0
 * @since 21/10/2023
 * @author Mikel Echeverria
 */

$(function () {
  const apiKey = "6a59cda06d896a96b71e06c939253e4b"; // Define an API key

  // Hide elements with IDs "tiempo" and "search"
  $("#tiempo, #search").hide();

  // Define the title and author variables
  const title = "ElTiempo";
  const author = "By Mikel Echeverria";

  // Define the title content and insert it into the element with ID "contTitulo"
  const titulo = `
    <div class="row position-absolute top-50 start-50 translate-middle mx-auto">
      <div id="titulo" class="text-center">
        <h1>${title}</h1>
        <span>${author}</span>
      </div>
    </div>
  `;
  $("#contTitulo").html(titulo);

  // Function to get the image URL based on the main weather condition
  function getImg(main) {
    const imgMap = {
      Clouds: "./assets/Image/cloud.png",
      Clear: "./assets/Image/sol.png",
      Snow: "./assets/Image/snow.png",
      Rain: "./assets/Image/rain.png",
      Drizzle: "./assets/Image/drizzle.png",
      Thunderstorm: "./assets/Image/Truenos.png",
    };
    return imgMap[main] || "";
  }

  // Function to get temperature information from coordinates (lon, lat)
  function getTemp(lon, lat) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&lang=es&appid=${apiKey}`;

    // Make a GET request to the OpenWeatherMap API and update HTML elements with temperature data
    $.get(apiUrl, function (temp) {
      const imgSrc = getImg(temp.daily[0].weather[0].main);
      const currentTemp = Math.round(temp.current.temp);
      const minTemp = Math.round(temp.daily[0].temp.min);
      const maxTemp = Math.round(temp.daily[0].temp.max);
      const dailyTemps = temp.daily.slice(0, 4).map((e) => {
        const imgSrc = getImg(e.weather[0].main);
        const temp = Math.round(e.temp.day);
        return `<td class="col-3 col-ms-1"><span id="tiempo1">${temp}º</span><img src="${imgSrc}" style="width: 50px;"></td>`;
      }).join("");
      $("#cajaImg").html(`<img src="${imgSrc}">`);
      $("#temperatura").html(`${currentTemp}º`);
      $("#min").html(`<strong>Min:</strong> ${minTemp}º`);
      $("#max").html(`<strong>Max:</strong> ${maxTemp}º`);
      $("#tr").html(dailyTemps);
    });
  }

  // Function to get the city name from coordinates (lat, lon)
  function getNameCityCord(lat, lon) {
    const apiCord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // Make a GET request to the OpenWeatherMap API to get the city name
    $.get(apiCord, function (city) {
      $("#ciudad").html(city.name);
      getTemp(lon, lat);
    });
  }

  // Function to get weather data based on city name
  function getCity(cityName) {
    const apiCord = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // Make a GET request to the OpenWeatherMap API to get weather data for the city
    $.get(apiCord, function (city) {
      const lon = city.coord.lon;
      const lat = city.coord.lat;
      getNameCityCord(lat, lon);
    });
  }

  // Success function for getting current location
  const onSuccess = function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Update the title and show elements related to weather information
    const titulo = `
      <div class="row mt-4">
        <div id="titulo" class="text-center">
          <h1>${title}</h1>
          <span>${author}</span>
        </div>
      </div>
    `;
    $("#tiempo").show();
    $("#titulo").hide();
    $("#contTitulo").html(titulo);
    getNameCityCord(lat, lon);
  };

  // Error function for getting location
  function onError(error) {
    // Show an error message with the error code and message
    alert(`code: ${error.code}\nmessage: ${error.message}\n`);
  }

  let contador = 0; // Initialize a counter

  // Click handler for "home" button
  $("#home").click(function (event) {
    contador = 0;
    $("#buscar").val(""); // Reset the search field value
    $("#tiempo, #search").hide(); // Hide weather information and search area
    $("#titulo").show(); // Show the main title
    $("#contTitulo").html(titulo); // Restore the title content
  });

  // Keypress handler for search field
  $("#buscar").keypress(function (e) {
    if (e.which == 13) {
      $("#lupa").click(); // Simulate a click on the search button when Enter is pressed
    }
  });

  // Click handler for search button
  $("#lupa").click(function (event) {
    $("#search").show(); // Show the search area
    $("#buscar").focus(); // Focus on the search field
    const titulo = `
      <div class="row mt-4">
        <div id="titulo" class="text-center">
          <h1>${title}</h1>
          <span>${author}</span>
        </div>
      </div>
    `;

    if (contador >= 1 && $("#buscar").val() != "") {
      $("#tiempo").show(); // Show weather information
      getCity($("#buscar").val()); // Get weather data based on the entered city
      $("#titulo").hide(); // Hide the main title
      $("#contTitulo").html(titulo); // Restore the title content
    }
    contador += 1;
  });

  // Click handler for location button
  $("#location").click(function (event) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError); // Get current location
  });
});