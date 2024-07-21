
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const app = document.getElementById('app')

const months =  ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const getWeather = async () => {
  try {
    const cityName = document.getElementById('searchBarInput').value;
    const weatherDateFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=154ce9c4290971119d1e19bac1a4e4ad&units=metric`, {
    headers: {
      Accept: 'application/json'
    }
    });

    const weatherData = await weatherDateFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png"/>`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}</h2>`;
    tempMax.innerHTML = `${weatherData.main.temp_max}`;
    tempMin.innerHTML = `${weatherData.main.temp_min}`;



  }catch(error){
    console.error(error);
  }
}

getWeather()








