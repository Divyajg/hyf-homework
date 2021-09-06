//1.my JSON file--------------------------------------------------------------------

[{
    "name": "Aryabhatta",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "499CE" }],
    "also known for:": ["inventor of 0", "Astronomy"],

    "name": "Suśruta",
    "Known as: ": [{ "category": "Physician" }, { "period": "1500BC" }],
    "also known for:": ["Father of Plastic surgery", "Father of brain surgery", "surgical procedures"],

    "name": "Brahmagupta",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "600CE" }],
    "also known for:": ["Astronomer", "Defined the properties of 0"],

    "name": "Baudhayan",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "800BC" }],
    "also known for:": ["Pythagoras theorem earlier than Pythagoras", "Find value of pi"],

    "name": "Mahaviracharya",
    "Known as: ": [{ "category": "Mathematician" }, { "period": "850CE" }],
    "also known for:": ["seperated astrology from mathematics", "other expansions in mathematics"],

    "name": "Charak",
    "Known as: ": [{ "category": "Medicine" }, { "period": "200BC" }],
    "also known for:": ["Ayurveda", "medical treatise entitled Charaka Samhita"],

    "name": "Patanjali",
    "Known as: ": [{ "category": "Yoga" }, { "period": "200BCE" }],
    "also known for:": ["Yoga sutras", "Mahābhāṣya"],

    "name": "Kanad",
    "Known as: ": [{ "category": "Physics" }, { "period": "200BCE" }],
    "also known for:": ["Atomiv theory"]

}]

//2.My cool API-------------------------------------------------------------------

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(typeof(json)); //object
        const jsonString = JSON.stringify(json);
        console.log(typeof(jsonString)); //string
    });

//Weather API------------------------------------------------------------------
//get weather for your choice of city------------------------------------------


function getWeatherHere() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c20bdbd9cdf94e9fb3889776572cba5a';

        document.getElementById('city').innerHTML = "City:  " + city;
        fetch(weatherUrl)
            .then(response => response.json())
            .then(weather => {
                document.getElementById('temp').innerHTML = "Temperatur(F):  " + weather.main.temp;
                document.getElementById('icon').src = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
                document.getElementById('wind').innerHTML = "Wind Speed(Kmps):  " + weather.wind.speed;
                document.getElementById('cloud').innerHTML = "Clouds:  " + weather.clouds.all;
                document.getElementById('sunrise').innerHTML = "Sunrise:  " + weather.sys.sunrise;
                document.getElementById('sunset').innerHTML = "Sunset:  " + weather.sys.sunset;
                //saving data to localstorage:---------------------------------------------
                localStorage.setItem('city', city);
                let retriveData = localStorage.getItem('city');
                console.log('retrived data:  ', retriveData);
                //showing map-------------------------------
                let lat = weather.coord.lat;
                let lng = weather.coord.lon;
                let map;

                function initMap(lat, lng) {
                    const coords = new google.maps.LatLng(lat, lng);
                    map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 4,
                        center: coords,
                    });
                }
                initMap(lat, lng);
                document.getElementById('map').innerHTML = `<div><iframe src="https://maps.google.com/maps?q=${weather.name}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;

            });
    } else {
        document.getElementById('note').innerHTML = "Please provide the city!"
    }
}
document.querySelector('#weatherButton').addEventListener('click', getWeatherHere);

//How can i do this? 'Now when loading the page and there is a city in the localstorage, use that to get the current weather'.

//get weather for your current location---------------------------------------------

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    let crd = pos.coords;
    const cLocation = document.getElementById('displayCurrentLoc');
    cLocation.innerHTML = "Latitude= " + crd.latitude + "  Longitude= " + crd.longitude;
    const myurl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + crd.latitude + '&lon=' + crd.longitude + '&appid=c20bdbd9cdf94e9fb3889776572cba5a';
    console.log(myurl);

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + crd.latitude + '&lon=' + crd.longitude + '&appid=c20bdbd9cdf94e9fb3889776572cba5a')
        .then(response => response.json())
        .then(data => {
            document.getElementById('currentTemp').innerHTML = "Temperatur(F):  " + data.main.temp;
            document.getElementById('currentWeather').innerHTML = "Weather:  " + data.weather[0].description;
            document.getElementById('icon2').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            let lat = data.coord.lat.toFixed(4);
            let lng = data.coord.lon.toFixed(4);
            let mapCurrent;

            const coords = new google.maps.LatLng(lat, lng);
            // Initialize and add the map
            function initMap(lat, lng) {
                mapCurrent = new google.maps.Map(document.getElementById("mapC"), {
                    zoom: 16,
                    center: coords,
                });
            }
            initMap(lat, lng);
            document.getElementById('mapC').innerHTML = `<div><iframe src="https://maps.google.com/maps?q=${coords}&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
        })
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function currentLocation() { navigator.geolocation.getCurrentPosition(success, error, options); }

document.getElementById('currentLoc').addEventListener('click', currentLocation);



//Giphy searcher------------------------------------------------------------------------------

function searchForGifs() {

    document.getElementById('gifTitle').innerHTML = "Giphy searcher:";

    //get div created in html:
    const divGif = document.getElementById('getGif');

    //create input type text to search:
    const gifInput = document.createElement('input');
    gifInput.setAttribute('type', 'text');
    gifInput.setAttribute('class', 'font');
    gifInput.setAttribute('placeholder', 'Ex: funny cat');
    gifInput.id = "gifInput";
    divGif.appendChild(gifInput);

    const gap1 = document.createElement('p');
    divGif.appendChild(gap1);

    //button to initiate search
    const gifButton = document.createElement('button');
    gifButton.innerHTML = 'Search for gif';
    divGif.appendChild(gifButton);


    const gap2 = document.createElement('p');
    divGif.appendChild(gap2);

    //create and append input type number to specify how many search results should be showed:
    const gifNum = document.createElement('input');
    gifNum.setAttribute('type', 'number');
    gifNum.setAttribute('class', 'font');
    gifNum.setAttribute('placeholder', 'Ex:4');
    divGif.appendChild(gifNum);

    //display the result
    const gifResult = document.getElementById('gifResult');

    //gifpersonalized key 
    const gifKey = 'YZy2UKXShrQ6lnfkDnxnLnDpj6umQeap';

    function getYourGifs() {
        fetch(gifUrl)
            .then(response => response.json())
            .then(gifData => {
                gifData.data.forEach((giphy) => {
                    const image = document.createElement("img");
                    image.setAttribute("src", `${giphy.images.fixed_width.url}`);
                    gifResult.appendChild(image);
                });

            })
    }

    function gifSearch() {
        if (gifInput) {

            gifResult.innerHTML = "";
            gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=20&offset=0&rating=g&lang=en`;

            getYourGifs();
        } else {
            const missingInput = document.createElement('p');
            missingInput.innerHTML = "Please provide your search."
            divGif.appendChild(missingInput);
        }
    }


    function gifQty() {
        gifResult.innerHTML = "";
        gifUrl = ` https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${gifInput.value}&limit=${gifNum.value}&offset=0&rating=g&lang=en`;
        getYourGifs();
    }

    gifButton.addEventListener('click', gifSearch);
    gifNum.addEventListener('input', gifQty);
}

document.getElementById('gif').addEventListener('click', searchForGifs);