let cityInput = document.querySelector('.container .input-box input');
let searchBtn = document.querySelector('.container .input-box button');
let weather_img = document.querySelector('.container .weather-img img');
let temp = document.querySelector('.container .temp');
let weatherDescrip= document.querySelector('.container .weather_descrip');
let humidity = document.querySelector('.container .other .humidity .humidity-value');
let windSpeed = document.querySelector('.container .other .wind-speed .windSpeed-value');

let apiKey = ''; //openweathermap api key

searchBtn.addEventListener('click',()=>{
   if(cityInput.value != ''){
     getWeatherInfo();    
   }  
})

let getWeatherInfo =()=>{
 let city = cityInput.value;
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
 fetch(url).then(res => res.json()).then(data =>{
  weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
  temp.innerHTML = `${data.main.temp}&#176;`;
  weatherDescrip.innerHTML = data.weather[0].description;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}Km/H`;
 })
}

getWeatherInfo();
