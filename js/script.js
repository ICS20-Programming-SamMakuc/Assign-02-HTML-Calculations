// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // Get the temperature input in Celsius and Fahrenheit
  var tempCelsius = document.getElementById("temp-celsius").value;
  var tempFahrenheit = document.getElementById("temp-fahrenheit").value;

  // Check which input is empty and calculate the other
  if (tempCelsius !== "") {
    var convertedTemp = (tempCelsius * 9/5) + 32;
    document.getElementById("tempAfterConversion").innerHTML = "Temperature in Fahrenheit: " + convertedTemp.toFixed(2) + "°F (Reload web page before another use)";
  } else if (tempFahrenheit !== "") {
    var convertedTemp = (tempFahrenheit - 32) * 5/9;
    document.getElementById("tempAfterConversion").innerHTML = "Temperature in Celsius: " + convertedTemp.toFixed(2) + "°C (Reload web page before another use)";
  } else {
    alert("Please enter a temperature.");
  }
}