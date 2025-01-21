let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

let temperature = 10;
let windspeed = 5
const calculateWindChill = function(temperature, windspeed){
    if (temperature >=10 && windspeed >=5) return(
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16)
    ).toFixed(2)
    else{
        return "N/A"
    }
} 
document.getElementById('windChill').innerHTML = `<strong>Wind:</strong> ${calculateWindChill(temperature,windspeed)}`