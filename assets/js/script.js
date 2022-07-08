var latitude = null
var longitude = null
var cityForcastResults = null
var test = null
var cityName = null

function cityForcast() {
    test = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=a1bcc3de275f38d86243553c7dde6315`)
        .then(response => response.json())
        .then(data => cityForcastResults = data)
    displaySearchData()
}

function displaySearchData() {
    console.log(cityForcastResults)
    var getIconCode = cityForcastResults.daily[0].weather[0].icon
        (console.log(cityForcastResults.daily[0].weather[0].icon))
    document.querySelector('#city-name-display').innerHTML = `${cityName} ${new Date(1657224000 * 1000)} ${03d.png
} `
    document.querySelector('#temp').innerHTML = `Temp: ${ cityForcastResults.daily[0].temp.max } `
    document.querySelector('#wind').innerHTML = `Wind: ${ cityForcastResults.daily[0].wind_speed } MPH`
    document.querySelector('#humidity').innerHTML = `Humidity: ${ cityForcastResults.daily[0].humidity }% `
}








//cityForcastResults.daily[].temp.max
//cityForcastResults.daily[].wind_speed
//cityForcastResults.daily[].humidity
//cityForcastResults.daily[].weather[0].description
//cityForcastResults.daily[].uvi

function citySearch() {
    latitude = 47.6062
    longitude = -122.3321
    cityName = 'Seattle'//document.getElementById('city-search-txtbar').value
    cityForcast()
}