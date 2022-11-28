const api_key = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getweather = async (city) => {
    weather.innerHTML=`Loading.....`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return showweather(data)
};
const showweather = (data) => {
  weather.innerHTML = `<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>
        ${data.main.temp} degree C
    </h2>
    <h4>
    ${data.weather[0].main}
</div>`;
}

form.addEventListener(
  "submit",
  function (event) {
    getweather(search.value);
    event.preventDefault();
  },
  true
);
