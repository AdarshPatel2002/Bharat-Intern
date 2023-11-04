(function currentTime()
{
   let p1 = document.getElementById("p1")
   p1.innerHTML = new Date().toLocaleTimeString();
   let t = setTimeout(function () { currentTime() }, 1000);
})();

function temperature()
{
   let inputValue = document.querySelector("#inputValue").value;
   let type1 = document.querySelector("#type1");
   let type2 = document.querySelector("#type2");
   let result = document.querySelector("#result");

   if (inputValue == "")
   {
      alert("Please Enter a valid temperature.")
      location.reload()
   }

   else if (type1.value == "celcius" && type2.value == "celcius")
   {
      let Celcius = Number.parseFloat(inputValue) * 1
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
   }

   else if (type1.value == "celcius" && type2.value == "fahrenheit")
   {
      let Fahrenheit = Number.parseFloat(inputValue) * (9 / 5) + 32
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
   }

   else if (type1.value == "celcius" && type2.value == "kelvin")
   {
      let Kelvin = Number.parseFloat(inputValue) + 273.15
      result.innerHTML = Kelvin.toFixed(3) + " K"
   }

   else if (type1.value == "fahrenheit" && type2.value == "celcius")
   {
      let Celcius = Number.parseFloat(inputValue) - 32 * (5 / 9)
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
   }

   else if (type1.value == "fahrenheit" && type2.value == "fahrenheit")
   {
      let Fahrenheit = Number.parseFloat(inputValue) * 1
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
   }

   else if (type1.value == "fahrenheit" && type2.value == "kelvin")
   {
      let Kelvin = Number.parseFloat(inputValue) - 32 * (5 / 9) + 273.15
      result.innerHTML = Kelvin.toFixed(3) + " K"
   }

   else if (type1.value == "kelvin" && type2.value == "celcius")
   {
      let Celcius = Number.parseFloat(inputValue) - 273.15
      result.innerHTML = Celcius.toFixed(3) + ` &deg;C`
   }

   else if (type1.value == "kelvin" && type2.value == "fahrenheit")
   {
      let Fahrenheit = Number.parseFloat(inputValue) - 273.15 * (9 / 5) + 32
      result.innerHTML = Fahrenheit.toFixed(3) + " F"
   }
   
   else if (type1.value == "kelvin" && type2.value == "kelvin")
   {
      let Kelvin = Number.parseFloat(inputValue) * 1
      result.innerHTML = Kelvin.toFixed(3) + " K"
   }
}