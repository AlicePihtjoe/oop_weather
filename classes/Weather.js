class Weather{
    constructor(city) {
        this.city = city
        this.key = 'ba9321c489c75d3a7f0c21c0199f92f9'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)

        const responseData = await response.json()
        return responseData
    }
}