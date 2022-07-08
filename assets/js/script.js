var cityForcastResults = null
citySearchResults = null
var cityName = null
var latitude = null
var longitude = null

async function cityForcast() {
    var getApiInfo = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=a1bcc3de275f38d86243553c7dde6315`)
        .then(response => response.json())
        .then(data => cityForcastResults = data)
    displaySearchData()
}

function displaySearchData() {
    $('section').css("display", "block")
    $("#city-name-display").html(`${citySearchResults.results[0].address_line1} ${moment(cityForcastResults.daily[0].dt * 1000).format('M/D/YYYY')}`)
    $('#temp').html(`Temp: ${cityForcastResults.daily[0].temp.max}`)
    $('#wind').html(`Wind: ${cityForcastResults.daily[0].wind_speed} MPH`)
    $('#humidity').html(`Humidity: ${cityForcastResults.daily[0].humidity}%`)
    $('#uv-index').html(`UV Index: ${cityForcastResults.daily[0].uvi}`)
    for (i = 1; i < 6; i++) {
        element = $('<div></div>').addClass("forcast-card")
        $(".forcast-cards-container").append(element)
        tag = $(`<h1>${(moment(cityForcastResults.daily[i].dt * 1000).format('M/D/YYYY'))}</h1>`)
        element.append(tag)
        tag = $(`<p>Temp: ${cityForcastResults.daily[i].temp.max}</p>`)
        element.append(tag)
        tag = $(`<p>Wind: ${cityForcastResults.daily[i].wind_speed} MPH</p>`)
        element.append(tag)
        tag = $(`<p>Humidity: ${cityForcastResults.daily[i].humidity}%</p>`)
        element.append(tag)
    }
}

async function citySearch() {
    cityName = $('#city-search-txtbar').val()
    var getApiInfo = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${cityName}&lang=en&limit=1&type=city&filter=countrycode:us,ca&bias=countrycode:us,ca&format=json&apiKey=b2dad84f9d464a5392999ef97f08411e`)
        .then(response => response.json())
        .then(data => citySearchResults = data)
    latitude = citySearchResults.results[0].bbox.lat1
    longitude = citySearchResults.results[0].bbox.lon1
    cityForcast()
}