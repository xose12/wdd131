document.addEventListener("DOMContentLoaded", function() {
    const data = {
        //Accra Ghana data to display
        area: "3,245 km2 (1,253 sq mi)",
        population: "5,455,692",
        capital: "Greater Accra",
        languages: "English, Twi",
        currency: "Ghana Cedis",
        timeZone: "GMT",
        callingCode: "+233",
        internetTLD: ".gh",
        temperature: "26°F",
        conditions: "mostly sunny",
        windSpeed: "13 km/h",
    };
    //function to fill the information in the page
    function fillData() {
        for (let key in data) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = data[key];
            }
        }
    }
    //Calls function to display information
    fillData();


    // Calculate the wind chill
    const temp = parseInt(data.temperature);
    const speed = parseInt(data.windSpeed);

    if (temp <= 50 && speed > 3) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
        document.getElementById("windChill").textContent = windChill.toFixed(1) + "°F";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }

});