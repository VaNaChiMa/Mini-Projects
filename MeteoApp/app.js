const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "7d663dee3d1d9ab5ed5dbaccb4e245a4";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      res.sendFile(__dirname + "/localWeather.html");
      res.send(`<main>
      <link rel="stylesheet" href="CSS/localStyle.css">
        <div class="container">
            <div class="row appTitle">
                <h1 class="title">Meteo app</h1>
            </div>
            <div class="row city">
                <img class="location" src="/images/location-dot-solid.svg" alt="location">
                <h2 class="yourCity">${query}</h2>
            </div>
            <div class="row temp">
                <img class="weather" src="${iconURL}" alt="weather">
                <h1 class="temperature">${temperature} &#8451;</h1>
            </div>
            <p class="description">${description}</p>
            <form action="/localWeather.html" method="post">
                <button class="btn" type="submit">Change location</button>
            </form>
            <a class="location" href="index.html"></a>
        </div>
    </main>`);
      // res.send(
      //   `<p>The weather is currently ${description}.</p><h1>The temperature in ${query} is ${temperature} degrees Celsius.</h1><img src="${iconURL}">`
      // );
    });
  });
});
app.post("/localWeather.html", function (req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
