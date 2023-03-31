// Created by: Sam Makuc
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked() {
  // Get the temperature input in Celsius and Fahrenheit
  let tempCelsius = document.getElementById("temp-celsius").value;
  let tempFahrenheit = document.getElementById("temp-fahrenheit").value;

  // Check which input is empty and calculate the other
  if (tempCelsius !== "") {
    let convertedTemp = (tempCelsius * 9/5) + 32;
    document.getElementById("tempAfterConversionF").innerHTML = "Temperature in Fahrenheit: " + convertedTemp.toFixed(2) + "°F (Reload web page before another use)";
  } else if (tempFahrenheit !== "") {
    let convertedTemp = (tempFahrenheit - 32) * 5/9;
    document.getElementById("tempAfterConversionC").innerHTML = "Temperature in Celsius: " + convertedTemp.toFixed(2) + "°C (Reload web page before another use)";
  } else {
    alert("Please enter a temperature.");
  }
}
