class Weather {
  constructor(city, state) {
    this.apikey = "c4d2daece128a7fb3f6f84fb0a40ca18";
    this.city = city,
    this.state = state
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw Error(response.status);
    }
  }

  changeLocation(city, state) {
    this.city = city,
    this.state = state
  }

  get location() {
    return this.state + " , " + this.city;
  }
}
