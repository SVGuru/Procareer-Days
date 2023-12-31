async function getweather() {

   try {
    let city = document.getElementById('zipcode').value;
    let key = 'd72729578543cfc435344f99b226b1c9'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    
    await fetch(url)
    .then((weather) => {return weather.json()})
    .then(displayData);
   }
   catch{
       console.log(" sorry something went wrong");
   }
}

function displayData(weather) {

    //mydiv.innerHTML = "<h3>Getting Data ....</h3>";
  let mydiv = document.getElementById('w');
  console.log(weather);
  let city = "City " + weather.name;
  let tempFar = (weather.main.temp * 9/5) + 32;
  let temp = '<span style="color:green"> Temperature ' + tempFar + " F";
  let tempC = '<span style="color:yellow"> Temperature ' +weather.main.temp + " C";
  let weaStr = '<span style="color:orange"> Looks like ' + weather.weather[0].description;
  let windSpd = '<span style="color:violet"> Wind Speed ' + weather.wind.speed;
  mydiv.innerHTML = `<h3>${city} <br> ${temp} <br>  ${tempC} <br> ${windSpd} <br>${weaStr}</h3>`;


}
